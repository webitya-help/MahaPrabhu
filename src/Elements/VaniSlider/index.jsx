import React from "react";
import MiniSliderAll from "../MiniSliderAll";


const VaniSlider = () => {
  const santData = [
    {
      image: "/hit sahitya 512 by 512/1.png",
      title: "श्री हित हरिवंश",
    },
    {
      image: "/hit sahitya 512 by 512/2.png",
      title: "श्री हरिराम व्यास",
    },
    {
      image: "/hit sahitya 512 by 512/3.png",
      title: "स्वामी श्री हरिदास",
    },
    {
      image: "/hit sahitya 512 by 512/4.png",
      title: "श्री हित ध्रुवदास",
    },
    {
      image: "/hit sahitya 512 by 512/5.png",
      title: "महाप्रभु वल्लभाचार्य",
    },
    {
      image: "/hit sahitya 512 by 512/6.png",
      title: "श्री विठ्ठल देव",
    },
    {
      image: "/hit sahitya 512 by 512/7.png",
      title: "श्री विष्णु देव जी",
    },
    {
      image: "/hit sahitya 512 by 512/8.png",
      title: "स्वामी श्री हरिदास",
    },
    {
      image: "/hit sahitya 512 by 512/9.png",
      title: "श्री हित ध्रुवदास",
    },
  ];

  return (
    <div className="container mx-auto">
      <MiniSliderAll
        santList={santData}
        title="श्रीहित रसोपासना एवं संतों की वाणी"
        viewAllLink="/hit-sahitya" 
        seconds={1500}
      />
    </div>
  );
};

export default VaniSlider;
