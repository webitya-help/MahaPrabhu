import React from 'react';
import DynamicBrajCards from '../../DynamicBrajCards';


const BrajVrindavan = () => {
    const vrindavanData = [
        { id: 1,title: "आशेह्वर महादेव नंदगांव", templeName: "", imageUrl: "/vrindavan/brj5i.jpeg", link: "/braj-vrindavan" },
        { id: 2,title: "आशेह्वर महादेव नंदगांव", templeName: "", imageUrl: "/vrindavan/brj1.jpeg", link: "/braj-mathura" },
        { id: 3,title: "आशेह्वर महादेव नंदगांव", templeName: "", imageUrl: "/vrindavan/brj2.jpeg", link: "/braj-barsana" },
        { id: 4,title: "आशेह्वर महादेव नंदगांव", templeName: "", imageUrl: "/vrindavan/brj3.jpeg", link: "/braj-govardhan" },
        { id: 5,title: "आशेह्वर महादेव नंदगांव", templeName: "", imageUrl: "/vrindavan/brj4.jpeg", link: "/braj-gokul" },
        { id: 6,title: "आशेह्वर महादेव नंदगांव", templeName: "", imageUrl: "/vrindavan/brj5.jpeg", link: "/braj-nand" },
      ];
      
  return <DynamicBrajCards cardsData={vrindavanData} title="Vrindavan" />;
};

export default BrajVrindavan;
