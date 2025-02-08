import React from "react";
import MiniSliderAll from "../MiniSliderAll";


const UtsavSlider = () => {
  const santData = [
    {
      image: "/utsav 512 by 512/ankut utsav.png",
      title: "अन्नकूट दर्शन  ",
    },
    {
      image: "/utsav 512 by 512/chandnoutsav.png",
      title: " चंदन उत्सव ",
    },
    {
      image: "/utsav 512 by 512/diwali utsav.png",
      title: " दिवाली उत्सव ",
    },
    {
      image: "/utsav 512 by 512/gulab dol.png",
      title: " गुलाब डोल उत्सव ",
    },
    {
      image: "/utsav 512 by 512/holi utsav.png",
      title: "होली उत्सव ",
    },
    {
      image: "/utsav 512 by 512/khichdi utsav.png",
      title: "खिचड़ी उत्सव ",
    },
    {
      image: "/utsav 512 by 512/moor kunj.png",
      title: "मोर कुंज",
    },
    {
      image: "/utsav 512 by 512/phul bangla.png",
      title: "फूल बंगला",
    },
    {
      image: "/utsav 512 by 512/radha ashtami.png",
      title: "श्री राधाष्टमी",
    },
    {
      image: "/utsav 512 by 512/sharad purnima.png",
      title: "शरद पूर्णिमा",
    },
    {
      image: "/utsav 512 by 512/vyahula.png",
      title: "व्याहुला महोत्सव",
},
];

  return (
    <div className="container mx-auto">
      <MiniSliderAll
        santList={santData}
        title="श्रीहित राधावल्लभ संप्रदाय उत्सव"
        viewAllLink="/utsav-pad" 
        seconds={1300}
      />
    </div>
  );
};

export default UtsavSlider;
