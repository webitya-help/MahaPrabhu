import React, { useState, useEffect } from "react";
import { Carousel, Card, Row, Col, Button, Tooltip, Modal } from "antd";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  BellOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const NextArrow = ({ onClick }) => (
  <Tooltip title="Next" placement="top">
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-3 rounded-full shadow-md bg-gray-200">
        <RightOutlined className="text-gray-700" />
      </div>
    </div>
  </Tooltip>
);

const PrevArrow = ({ onClick }) => (
  <Tooltip title="Previous" placement="top">
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-3 rounded-full shadow-md bg-gray-200">
        <LeftOutlined className="text-gray-700" />
      </div>
    </div>
  </Tooltip>
);

const HomeTimingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isSmallDevice = windowWidth < 576;
  const itemsPerSlide = isSmallDevice ? 1 : 4; // Show 4 items per slide on larger screens

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const timingEvents = [
    { title: "मंगला आरती ", description: "5:30 AM", icon: <ClockCircleOutlined /> },
    { title: "धूप आरती ", description: "9:00 AM", icon: <CalendarOutlined /> },
    { title: "श्रृंगार आरती ", description: "10:00 AM", icon: <ClockCircleOutlined /> },
    { title: "राजभोग आरती", description: "12:00 PM", icon: <BellOutlined /> },
    { title: "उत्थापन आरती ", description: "5:30 PM", icon: <BellOutlined /> },
    { title: "संध्या आरती", description: "6:30 PM", icon: <BellOutlined /> },
    { title: "सयन आरती ", description: "8:30 PM", icon: <BellOutlined /> },
  
  ];

  const slides = [];
  for (let i = 0; i < timingEvents.length; i += itemsPerSlide) {
    slides.push(timingEvents.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="container mx-auto px-6 pt-6 pb-4 bg-gray-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">अष्ट्यम सेवा </h1>
        <Button
          className="px-4 py-1 text-sm font-medium bg-gray-800 text-white rounded"
          onClick={() => setIsModalVisible(true)}
        >
          View All
        </Button>
      </div>

      <Carousel
        arrows
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        autoplay
        autoplaySpeed={3000}
        dots={false}
        beforeChange={(current, next) => setCurrentSlide(next)}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Row gutter={[16, 24]} justify="center">
              {slide.map((event, eventIndex) => (
                <Col xs={24} sm={12} md={6} lg={6} xl={6} key={eventIndex}> {/* 4 cards per row */}
                  <Card className="flex flex-col h-full shadow-sm">
                    {/* <div className="text-gray-600 text-4xl mb-3 flex justify-center">
                      {event.icon}
                    </div> */}
                    <h2 className="text-center text-lg font-medium text-gray-800 mb-1">
                      {event.title}
                    </h2>
                    <p className="text-center text-gray-600">{event.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>

      <Modal
        title="All Timings"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        <div className="space-y-4">
          {timingEvents.map((event, index) => (
            <div key={index}>
              <h3 className="text-base font-medium text-gray-800">{event.title}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default HomeTimingSection;
