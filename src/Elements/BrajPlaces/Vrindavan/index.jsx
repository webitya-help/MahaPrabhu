import React from 'react';
import DynamicBrajCards from '../../DynamicBrajCards';


const BrajVrindavan = () => {
    const vrindavanData = [
      { id: 1,title: "श्रीहित राधावल्लभ लाल जी", templeName: "", imageUrl: "/vrindavan/9.jpg", link: "/braj-gokul" },
        { id: 5,title: "गोपेश्वर महादेव जी", templeName: "", imageUrl: "/vrindavan/1.jpg", link: "/braj-vrindavan" },
        { id: 2,title: "निधिवान जी", templeName: "", imageUrl: "/vrindavan/2.jpg", link: "/braj-mathura" },
        { id: 3,title: "प्रेम मंदिर", templeName: "", imageUrl: "/vrindavan/3.jpg", link: "/braj-barsana" },
        { id: 4,title: "बांके बिहारी मैं", templeName: "", imageUrl: "/vrindavan/4.jpg", link: "/braj-govardhan" },
        { id: 5,title: "लाड़ली जू दर्शन, निधिवन", templeName: "", imageUrl: "/vrindavan/5.jpg", link: "/braj-gokul" },
        { id: 6,title: "राधा गोविंद देव जी", templeName: "", imageUrl: "/vrindavan/6.jpg", link: "/braj-nand" },
        { id: 3,title: "राधा मदन मोहन जी", templeName: "", imageUrl: "/vrindavan/7.jpg", link: "/braj-barsana" },
        { id: 4,title: "राधारमण जी", templeName: "", imageUrl: "/vrindavan/8.jpg", link: "/braj-govardhan" },
        
        { id: 6,title: "सनेह बिहारी जी", templeName: "", imageUrl: "/vrindavan/10.jpg", link: "/braj-nand" },
      ];
      
  return <DynamicBrajCards cardsData={vrindavanData} title="Vrindavan" />;
};

export default BrajVrindavan;
