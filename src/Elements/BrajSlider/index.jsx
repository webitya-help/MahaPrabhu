import React from "react";
import MiniSliderAll from "../MiniSliderAll";


const BrajSlider = () => {
  const santData = [
    {
      image: "/braj darshan 512 by 512/barsana.png",
      title: "श्रीधाम बरसाना",
    },
    {
      image: "/braj darshan 512 by 512/dwarikadish.png",
      title: "श्री द्वारिकाधीश जी",
    },
    {
      image: "/braj darshan 512 by 512/govardhan.png",
      title: "श्री गोवर्धन जी",
    },
    {
      image: "/braj darshan 512 by 512/janam bhumi.png",
      title: "श्रीकृष्ण जन्मभूमि",
    },
    {
      image: "/braj darshan 512 by 512/maan sarovar.png",
      title: "मानसरोवर धाम",
    },
    {
      image: "/braj darshan 512 by 512/nand gaon.png",
      title: "श्री नंदगाँव धाम ",
    },
    {
      image: "/braj darshan 512 by 512/nidhi van.png",
      title: "श्री निधिवन जी",
    },
    {
      image: "/braj darshan 512 by 512/prem mandir.png",
      title: "प्रेम मंदिर",
    },
    {
      image: "/braj darshan 512 by 512/radha raman.png",
      title: "श्री राधारमण लाल जी",
    },
    {
      image: "/braj darshan 512 by 512/vrindavan.png",
      title: "श्रीधाम वृंदावन",
},];

  return (
    <div className="container mx-auto">
      <MiniSliderAll
        santList={santData}
        title="श्री ब्रज धाम दर्शन "
        viewAllLink="/braj-darshan" 
        seconds={1000}
      />
    </div>
  );
};

export default BrajSlider;
