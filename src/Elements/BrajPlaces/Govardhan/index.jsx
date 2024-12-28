import React from 'react';
import DynamicBrajCards from '../../DynamicBrajCards';


const BrajGovardhan = () => {
    const govardhanData = [
        { id: 1, title: "चक्रेश्वर महादेव गोवर्धन", templeName: "", imageUrl: "/govardhan/chakreshwarmahadevgovardha.jpeg" },
        { id: 2, title: "गोविंद कुंड गोवर्धन", templeName: "", imageUrl: "/govardhan/govindkundgovardha.jpeg" },
        { id: 4, title: "कुसुम सरोवर गोवर्धन", templeName: "", imageUrl: "/govardhan/kusumsarovargovardha.jpeg" },
        { id: 6, title: "ललिता कुंड गोवर्धन", templeName: "", imageUrl: "/govardhan/lalitakundgovardha.jpeg" },
        { id: 1, title: "मुखारबिंद गोवर्धन", templeName: "", imageUrl: "/govardhan/mukharbindgovardha.jpeg" },
        { id: 2, title: "नवल कुंड गोवर्धन", templeName: "", imageUrl: "/govardhan/navalkundgovardha.jpeg" },
        { id: 4, title: "पुंछरी की लौठा जी गोवर्धन", templeName: "", imageUrl: "/govardhan/punchrikilothajigovardha.jpeg" },
        { id: 6, title: "रुद्र कुंड गोवर्धन", templeName: "", imageUrl: "/govardhan/rudrakundgovardha.jpeg" },
        { id: 6, title: "संकर्षण कुंड गोवर्धन", templeName: "", imageUrl: "/govardhan/sankarsankundgovardha.jpeg" },
        { id: 6, title: "सिंधुरी शिला गोवर्धन", templeName: "", imageUrl: "/govardhan/shindhurishilagovardha.jpeg" },
        { id: 6, title: "श्रीनाथ जी गोवर्धन", templeName: "", imageUrl: "/govardhan/shrinathjigovardha.jpeg" },
        { id: 6, title: "उद्धव कुंड गोवर्धन", templeName: "", imageUrl: "/govardhan/udhaavkundgovardha.jpeg" },
        { id: 6, title: "उद्धव मंदिर कुसुम सरोवर गोवर्धन", templeName: "", imageUrl: "/govardhan/udhaavmandirkusumsarovargovardha.jpeg" },
      ];
      

  return <DynamicBrajCards cardsData={govardhanData} title="Govardhan" />;
};

export default BrajGovardhan;
