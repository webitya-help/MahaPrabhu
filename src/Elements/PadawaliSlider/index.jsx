import React from "react";
import MiniSliderAll from "../MiniSliderAll";



const PadawaliSlider = () => {
  const santData = [
    {
        image: "/Padawali Slider/1.jpg",
        title: "",
      },
    {
      image: "/Padawali Slider/2.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/3.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/4.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/5.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/6.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/7.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/8.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/9.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/10.jpg",
      title: "",
    },
    {
      image: "/Padawali Slider/11.jpg",
      title: "",
},
];

  return (
    <div className="container mx-auto">
      <MiniSliderAll
        santList={santData}
        title="श्रीहित पदावली"
        viewAllLink="#" seconds={1700}
      />
    </div>
  );
};

export default PadawaliSlider;
