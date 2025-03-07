import React from 'react';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  { id: 1, title: "Mehendi Pad ", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/mehendipad" },
  { id: 2, title: "बसंत उत्सव ", imageUrl: "/Utsav/basantutsa.jpeg", route: "/utsav/basant-utsav" },
  { id: 3, title: "चंदन उत्सव ", imageUrl: "/Utsav/ChandanUtsa.jpeg", route: "/utsav/chandan-utsav" },
  { id: 4, title: "दीपावली उत्सव ", imageUrl: "/Utsav/deepawaliutsa.jpeg", route: "/utsav/deepawali-utsav" },
  { id: 5, title: "गोपाष्टमी ", imageUrl: "/Utsav/gopasthm.jpeg", route: "/utsav/gopashtami" },
  { id: 6, title: "वृंदावन शतलीला", imageUrl: "/Utsav/GulabDo.jpeg", route: "/utsav/vrindavan-shatlila" },
  { id: 7, title: "हरियाली तीज", imageUrl: "/Utsav/HaryaliTee.jpeg", route: "/utsav/hariyali-teej" },
];

const UtsavCards = () => {
  const navigate = useNavigate();
  
  return (
    <div className="grid pt-[75px] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 py-6 justify-items-center">
      {cardsData.map((card) => (
        <div 
          key={card.id} 
          className="shadow-lg !mx-2 cursor-pointer mb-4 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl rounded-lg"
          onClick={() => navigate(card.route)}
          aria-label={`Navigate to ${card.title}`}
          style={{ width: '100%', maxWidth: '190px', height: '300px' }}
        >
          <div className="overflow-hidden rounded-t-lg">
            <img 
              src={card.imageUrl} 
              alt={card.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg"
            />
          </div>
          <div className="bg-gray-100 text-center py-2 rounded-b-lg transition-colors duration-300 hover:bg-gray-200">
            <p className="text-sm font-semibold text-gray-700">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UtsavCards;