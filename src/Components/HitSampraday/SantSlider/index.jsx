import React from "react";
import MiniSliderAll from "../../../Elements/MiniSliderAll";



const BrajSlider = () => {
  const santData = [
    {
      image: "/AboutImages/1.jpg",
      title: "बाद ग्राम, मथुरा",
    },
    {
      image: "/AboutImages/2.jpg",
      title: "वंशीवट",
    },
    {
      image: "/AboutImages/3.jpg",
      title: "भांडीरवन",
    },
    {
      image: "/AboutImages/4.jpg",
      title: "श्रीहित राधावल्लभ लाल जी मंदिर, काम्यवन",
    },
    {
      image: "/AboutImages/5.jpg",
      title: "श्रीहित राधावल्लभ लाल जी मंदिर, वृंदावन",
    },
    {
      image: "/AboutImages/6.jpg",
      title: "श्रीहित रसमण्डल",
    },
    {
      image: "/AboutImages/7.jpg",
      title: "श्रीहित हरिवंश महाप्रभुजी मंदिर",
    },
    {
      image: "/AboutImages/8.jpg",
      title: "सेवाकुंज जी",
    },
    {
      image: "/AboutImages/9.jpg",
      title: "श्रीहित हरिवंश महाप्रभुजी बैठक, राधाकुंड",
    },
    ];

  return (
    <div className="container mx-auto">
      <MiniSliderAll
        santList={santData}
        title=""
        viewAllLink="/braj-darshan" 
        seconds={1000}
      />
    </div>
  );
};

export default BrajSlider;
