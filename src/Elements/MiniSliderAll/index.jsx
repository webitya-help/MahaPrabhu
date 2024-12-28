import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const MiniSliderAll = ({ santList, title, viewAllLink, seconds }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the list for seamless looping
  const extendedList = [...santList, ...santList];

  const scrollRight = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setScrollPosition((prev) => prev + 1);
  };

  const scrollLeft = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setScrollPosition((prev) => prev - 1);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    const autoScroll = setInterval(() => {
      scrollRight();
    }, 3000); // Scroll every 3 seconds
    return () => clearInterval(autoScroll);
  }, [isPaused]);

  // Reset the position when reaching the duplicate set
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (scrollPosition < 0) {
        setScrollPosition(santList.length - 1);
      } else if (scrollPosition >= extendedList.length - santList.length) {
        setScrollPosition(santList.length);
      }
    };

    const timer = setTimeout(handleTransitionEnd, seconds); // Match transition duration
    return () => clearTimeout(timer);
  }, [scrollPosition, santList.length, extendedList.length, seconds]);

  return (
    <div
      className="relative p-3 bg-white shadow-md rounded-lg my-2"
      onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll on hover
      onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll on mouse leave
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <a href={viewAllLink} className="text-blue-500 hover:underline">
          View All
        </a>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        {/* Scrollable Content */}
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-300" : ""
          }`}
          style={{
            transform: `translateX(-${scrollPosition * 200}px)`, // 200px is the new item width
          }}
        >
          {extendedList.map((sant, index) => (
            <div
              key={index}
              className="min-w-[200px] max-w-[200px] flex flex-col items-center mx-2"
            >
              <img
                src={sant.image}
                alt={sant.title}
                className="w-44 h-44 object-cover rounded-lg shadow-md"
              />
              <p className="text-center text-sm text-gray-700 mt-2">
                {sant.title}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
          aria-label="Scroll Left"
        >
          <LeftOutlined />
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
          aria-label="Scroll Right"
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

export default MiniSliderAll;
