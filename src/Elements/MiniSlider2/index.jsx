import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Card, Button, Modal, Row, Col } from "antd";

const MiniSliderAll2 = ({ santList, title, seconds = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4); // Default to 4 items per slide
  const [isPaused, setIsPaused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Dynamically adjust items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 576) {
        setItemsPerSlide(2); // Show 2 cards per slide on mobile
      } else {
        setItemsPerSlide(4); // Show 4 cards per slide on larger screens
      }
    };

    updateItemsPerSlide(); // Initial calculation
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Calculate total slides
  const totalSlides = Math.ceil(santList.length / itemsPerSlide);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    const autoScroll = setInterval(() => {
      handleNext();
    }, seconds);
    return () => clearInterval(autoScroll);
  }, [isPaused, currentSlide]);

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
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
        <Button
          className="px-4 py-1 text-sm font-medium bg-gray-800 text-white rounded"
          onClick={() => setIsModalVisible(true)}
        >
          View All
        </Button>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex w-full justify-around"
              style={{
                minWidth: "100%",
              }}
            >
              {santList
                .slice(
                  slideIndex * itemsPerSlide,
                  slideIndex * itemsPerSlide + itemsPerSlide
                )
                .map((sant, index) => (
                  <Card
                    key={index}
                    cover={
                      <img
                        src={sant.image}
                        alt={sant.title}
                        className="w-full h-44 object-cover rounded-lg"
                      />
                    }
                    className="mx-2 w-44 shadow-md"
                  >
                    <p className="text-center text-sm text-gray-700 mt-2">
                      {sant.title}
                    </p>
                  </Card>
                ))}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        >
          <LeftOutlined />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        >
          <RightOutlined />
        </button>
      </div>

      {/* Modal */}
      <Modal
        title="All Items"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        <Row gutter={[16, 24]}>
          {santList.map((sant, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                cover={
                  <img
                    src={sant.image}
                    alt={sant.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                }
                className="shadow-md"
              >
                <p className="text-center text-sm text-gray-700">{sant.title}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal>
    </div>
  );
};

export default MiniSliderAll2;
