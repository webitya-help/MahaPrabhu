import React from 'react';
import DynamicBrajCards from '../../DynamicBrajCards';


const BrajGokul = () => {
    const gokulData = [
        { id: 2, title: "ब्रह्मानंद घाट गोकुल", templeName: "", imageUrl: "/gokul/brahmanadghatgoku.jpeg" },
        { id: 3, title: "चिंताहरण महादेव गोकुल", templeName: "", imageUrl: "/gokul/chintaharanmahadevgoku.jpeg" },
        { id: 4, title: "चिंताहरण महादेव", templeName: "", imageUrl: "/gokul/chintaharanmahade.jpeg" },
        { id: 3, title: "गोकुल महावन", templeName: "", imageUrl: "/gokul/gokulmahavan.jpeg" },
        { id: 5, title: "नंद भवन गोकुल", templeName: "", imageUrl: "/gokul/nandbhawangokul.jpeg" },
        { id: 6, title: "रमण बिहारी जी गोकुल", templeName: "", imageUrl: "/gokul/ramanbiharijigoku.jpeg" },
        { id: 6, title: "रसखान समाधि गोकुल", templeName: "", imageUrl: "/gokul/raskhansamadhigoku.jpeg" },
        { id: 6, title: "ताज बीबी की समाधि गोकुल", templeName: "", imageUrl: "/gokul/tajbibikisamadhigokul.jpeg" },
      ];
      

  return <DynamicBrajCards cardsData={gokulData} title="Gokul" />;
};

export default BrajGokul;
