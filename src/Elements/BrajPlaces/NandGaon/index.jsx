import React from 'react';

import DynamicBrajCards from '../../DynamicBrajCards';

const BrajNandGaon = () => {
    const nandgaonData = [
        { id: 1, title: "आशेह्वर महादेव नंदगांव", templeName: "", imageUrl: "/nand goan/aashehwarmahadevnandgoa.jpeg" },
        { id: 3, title: "चरण पहाड़ी नंदगांव", templeName: "", imageUrl: "/nand goan/charanpahadinandgoa.jpeg" },
        { id: 4, title: "मोर बिहारी मंदिर नंदगांव", templeName: "", imageUrl: "/nand goan/morbiharimandirnandgoa.jpeg" },
        { id: 5, title: "नंद बैठक नंदगांव", templeName: "", imageUrl: "/nand goan/nandbethaknandgoa.jpeg" },
        { id: 6, title: "नंद कुंआ नंदगांव", templeName: "", imageUrl: "/nand goan/nandkungnandgoa.jpeg" },
        { id: 2, title: "पवन सरोवर नंदगांव", templeName: "", imageUrl: "/nand goan/pawansarovarnandgoa.jpeg" },
        { id: 3, title: "तेर कटब नंदगांव", templeName: "", imageUrl: "/nand goan/terkatabnandgoa.jpeg" },
        { id: 4, title: "उद्धव क्यारी, नंदगाँव", templeName: "", imageUrl: "/nand goan/udhavikiyarinandgoa.jpeg" },
        { id: 6, title: "वरीन्दा देवी मंदिर नंदगांव", templeName: "", imageUrl: "/nand goan/varindadevimandirnandgoa.jpeg" },
        { id: 6, title: "यशोदा बैठक नंदगांव", templeName: "", imageUrl: "/nand goan/yashodabaethaknandgoa.jpeg" },
        { id: 6, title: "यशोदा कुंड नंदगांव", templeName: "", imageUrl: "/nand goan/yasodhakundnandgoa.jpeg" },
      ];
      

  return <DynamicBrajCards cardsData={nandgaonData} title="Nand Gaon" />;
};

export default BrajNandGaon;
