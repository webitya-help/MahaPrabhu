import React from "react";
import MiniSliderAll from "../MiniSliderAll";


const SantSlider = () => {
  const santData = [
    {
      image: "/sant darshan 512 by 512/chacha vrindavan das ji.png",
      title: "श्रीहित चाचा वृंदावनदास जी",
    },
    {
      image: "/sant darshan 512 by 512/dhruv das ji.png",
      title: "श्रीहित ध्रुवदास जी महाराज",
    },
    {
      image: "/sant darshan 512 by 512/hari ram vyas ji.png",
      title: "श्री हरिराम व्यास जी",
    },
    {
      image: "/sant darshan 512 by 512/harivansh ji mahaprabhu (2).png",
      title: "गोo श्रीहित हरिवंश महाप्रभु जी",
    },
    {
      image: "/sant darshan 512 by 512/harivansh ji mahaprabhu.png",
      title: "गोo श्रीहित हरिवंश महाप्रभु जी",
    },
    {
      image: "/sant darshan 512 by 512/krishna das ji.png",
      title: "श्री कृष्णदास जी",
    },
    {
      image: "/sant darshan 512 by 512/nagari das ji.png",
      title: "श्री नेह नगरीदास जी",
    },
    {
      image: "/sant darshan 512 by 512/roop lal ji.png",
      title: "गोo श्रीहित रूपलाल जी",
    },
    {
      image: "/sant darshan 512 by 512/sewak ji.png",
      title: "श्रीहित सेवक जू महाराज",
    },
    {
      image: "/sant darshan 512 by 512/vithal vipul dev ji.png",
      title: "श्री विट्ठल विपुल देव जी",
},
];

  return (
    <div className="container mx-auto">
      <MiniSliderAll
        santList={santData}
        title="श्री राधावल्लभ सम्प्रदाय संत दर्शन  "
        viewAllLink="/sant-darshan" seconds={1700}
      />
    </div>
  );
};

export default SantSlider;
