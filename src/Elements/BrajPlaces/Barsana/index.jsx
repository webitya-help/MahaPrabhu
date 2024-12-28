import React from 'react';
import DynamicBrajCards from '../../DynamicBrajCards';


const BrajBarsana = () => {
    const gokulData = [
        { id: 1, title: "अष्ट सखी मंदिर बरसाना", templeName: "", imageUrl: "/barsana/ashtsakhimandirbarsan.jpeg" },
        { id: 2, title: "दान गढ़ बरसाना", templeName: "", imageUrl: "/barsana/daangarhbarsan.jpeg" },
        { id: 3, title: "कीर्ति मंदिर बरसाना", templeName: "", imageUrl: "/barsana/kirtimandirbarsan.jpeg" },
        { id: 4, title: "मान गढ़ बरसाना", templeName: "", imageUrl: "/barsana/maangarhbarsan.jpeg" },
        { id: 5, title: "नगरीदास कुटीर बरसाना", templeName: "", imageUrl: "/barsana/nagaridaskuterbarsan.jpeg" },
        { id: 6, title: "प्रेम सरोवर बरसाना", templeName: "", imageUrl: "/barsana/premsarovarbarsan.jpeg" },
        { id: 7, title: "राधा सरोवर बरसाना", templeName: "", imageUrl: "/barsana/radhasarovarbarsan.jpeg" },
        { id: 8, title: "रंगीला महल बरसाना", templeName: "", imageUrl: "/barsana/rangelamahalbarsan.jpeg" },
        { id: 9, title: "श्रीजू राधारानी मंदिर बरसाना", templeName: "", imageUrl: "/barsana/shrijuradharanimandirbarsan.jpeg" },
      ]
  return <DynamicBrajCards cardsData={gokulData} title="Gokul" />;
};

export default BrajBarsana;
