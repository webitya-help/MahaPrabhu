import React from "react";
import MiniSliderAll from "../MiniSliderAll";


const UtsavSlider = () => {
  const santData = [
    {
      image: "/Carousel/1.jpg",
      title: "श्री हित हरिवंश",
    },
    {
      image: "/Carousel/2.jpg",
      title: "श्री हरिराम व्यास",
    },
    {
      image: "/Carousel/3.jpg",
      title: "स्वामी श्री हरिदास",
    },
    {
      image: "/Carousel/4.jpg",
      title: "श्री हित ध्रुवदास",
    },
    {
      image: "/Carousel/5.jpg",
      title: "महाप्रभु वल्लभाचार्य",
    },
    {
      image: "/Carousel/6.jpg",
      title: "श्री विठ्ठल देव",
    },
    {
      image: "/Carousel/2.jpg",
      title: "श्री विष्णु देव जी",
    },
    {
      image: "/Carousel/3.jpg",
      title: "स्वामी श्री हरिदास",
    },
    {
      image: "/Carousel/4.jpg",
      title: "श्री हित ध्रुवदास",
    },
    {
      image: "/Carousel/5.jpg",
      title: "महाप्रभु वल्लभाचार्य",
    },
    {
      image: "/Carousel/6.jpg",
      title: "श्री विठ्ठल देव",
    },
    {
      image: "/Carousel/2.jpg",
      title: "श्री विष्णु देव जी",
    },
  ];

  return (
    <div className="container mx-auto">
      <MiniSliderAll
        santList={santData}
        title="रसिक संत"
        viewAllLink="/view-all-sants" 
        seconds={1300}
      />
    </div>
  );
};

export default UtsavSlider;
