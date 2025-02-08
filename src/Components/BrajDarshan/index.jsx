import React from 'react';
import { Link } from 'react-router-dom';

const cardsData = [
  { id: 1, templeName: "वृंदावन", imageUrl: "/BannerPlace/vrindava.jpeg", link: "/braj-vrindavan" },
  { id: 2, templeName: "मथुरा", imageUrl: "/BannerPlace/mathur.jpeg", link: "/braj-mathura" },
  { id: 3, templeName: "बरसाना", imageUrl: "/BannerPlace/barsan.jpeg", link: "/braj-barsana" },
  { id: 4, templeName: "गोवर्धन", imageUrl: "/BannerPlace/gowardha.jpeg", link: "/braj-govardhan" },
  { id: 5, templeName: "गोकुल", imageUrl: "/BannerPlace/goku.jpeg", link: "/braj-gokul" },
  { id: 6, templeName: "नंदगांव", imageUrl: "/BannerPlace/nandgao.jpeg", link: "/braj-nand" },
];

const BrajDarshanAll = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF3E0] to-[#FFEFEF] py-16">
      <h1 className="text-4xl font-bold pt-5 text-center text-[#4B4453] mb-8 tracking-wide">
      सम्पूर्ण ब्रज दर्शन
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
        {cardsData.map((card) => (
          <Link to={card.link} key={card.id} aria-label={`Learn more about ${card.templeName}`}>
            <div className="bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.templeName}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                {/* Glossy Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-25 hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Title Section */}
              <div className="pt-3 text-center bg-white">
                <p className="text-xl font-semibold text-[#3D155F] tracking-wider">{card.templeName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrajDarshanAll;
