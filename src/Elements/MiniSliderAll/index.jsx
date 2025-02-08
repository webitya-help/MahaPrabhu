import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined, CloseOutlined, DownloadOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const MiniSliderAll = ({ santList, title, viewAllLink, seconds }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  useEffect(() => {
    if (isPaused) return;
    const autoScroll = setInterval(() => {
      scrollRight();
    }, 3000);
    return () => clearInterval(autoScroll);
  }, [isPaused]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (scrollPosition < 0) {
        setScrollPosition(santList.length - 1);
      } else if (scrollPosition >= extendedList.length - santList.length) {
        setScrollPosition(santList.length);
      }
    };

    const timer = setTimeout(handleTransitionEnd, seconds);
    return () => clearTimeout(timer);
  }, [scrollPosition, santList.length, extendedList.length, seconds]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const downloadImage = (image) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "image.jpg"; // You can modify the default filename here
    link.click();
  };

  return (
    <div
      className="relative p-3 bg-white shadow-md rounded-lg my-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-300" : ""
          }`}
          style={{
            transform: `translateX(-${scrollPosition * 200}px)`,
          }}
        >
          {extendedList.map((sant, index) => (
            <div
              key={index}
              className="min-w-[200px] max-w-[200px] flex flex-col items-center mx-2"
              onClick={() => openModal(sant.image)}
            >
              <img
                src={sant.image}
                alt={sant.title}
                className="w-44 h-44 object-cover rounded-lg shadow-md cursor-pointer"
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-[1000] bg-white p-2 rounded-full shadow text-black hover:bg-gray-200"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              <CloseOutlined />
            </button>

            <div className="relative bg-gradient-to-r from-zinc-100 via-zinc-100 to-zinc-200 p-6 rounded-xl shadow-lg z-10">
              <div className="bg-white p-4 rounded-lg">
                <img
                  src={selectedImage}
                  alt="Full Screen"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg border-4 border-gray-300 shadow-lg"
                />
              </div>
              <div className="absolute -inset-2 rounded-xl border-4  "></div>
            </div>

            {/* Download Button */}
            <span className="flex justify-between ">
            <button
              className="absolute bottom-4 left-4 z-[1000] bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-black hover:bg-gray-200"
              onClick={() => downloadImage(selectedImage)}
              aria-label="Download Image"
            >
              <DownloadOutlined />
              <span className="text-sm font-medium">Download</span>
            </button>
            <Link to="https://wa.link/7oxwsq" target="_blank">
            <button
              className="absolute bottom-4 right-4 z-[1000] bg-green-600 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-white hover:bg-gray-200"
              aria-label="Download Image"
            >
              <WhatsAppOutlined />
              <span className="text-sm font-medium">मंदिर से जुड़े
              </span>
            </button>
            </Link>

            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniSliderAll;
