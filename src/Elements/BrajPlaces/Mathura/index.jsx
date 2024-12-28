import React from 'react';
import DynamicBrajCards from '../../DynamicBrajCards';


const BrajMathura = () => {
    const mathuraData = [
        { id: 1, title: "बाढ़ ग्राम मथुरा", templeName: "", imageUrl: "/mathura/baadgrammathur.jpeg" },
        { id: 6, title: "भूतेश्वर महादेव मथुरा", templeName: "", imageUrl: "/mathura/bhuteshwarmahadevmathur.jpeg" },
        { id: 3, title: "गोकर्णेश्वर महादेव मथुरा", templeName: "", imageUrl: "/mathura/gokarneshwarmahadevmathur.jpeg" },
        { id: 4, title: "कंकाली देवी मथुरा", templeName: "", imageUrl: "/mathura/kankalidevimathur.jpeg" },
        { id: 6, title: "पोत्र कुंड मथुरा", templeName: "", imageUrl: "/mathura/potrakundmathur.jpeg" },
        { id: 6, title: "श्री दीर्घ विष्णु मंदिर मथुरा", templeName: "", imageUrl: "/mathura/shridirghvishnutemplemathur.jpeg" },
        { id: 6, title: "श्री रंगेश्वर महादेव मथुरा", templeName: "", imageUrl: "/mathura/shrirangeshwarmahadevmathur.jpeg" },
        { id: 6, title: "विस्राम घर मथुरा", templeName: "", imageUrl: "/mathura/vishramgharmathur.jpeg" },
      ];
      

  return <DynamicBrajCards cardsData={mathuraData} title="Mathura" />;
};

export default BrajMathura;
