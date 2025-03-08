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
  { id: 8, title: "Rakhi_utsav1", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/rakhiutsav" },
  { id: 9, title: "Ashtyam_Seva_Pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Ashtyam_Seva_Pad"},
  { id: 10, title: "Chandan_ke_Pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Chandan_ke_Pad"},
  { id: 11, title: "Chaupar", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Chaupar"},
  { id: 12, title: "Gend_khel_ke_pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Gend_khel_ke_pad"},
  { id: 13, title: "Hits_Utsav_mangal_Badhai", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Hits_Utsav_mangal_Badhai"},
  { id: 14, title: "Holi_dhol_ke_pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Holi_dhol_ke_pad"},
  { id: 15, title: "Jal_vihar_ke_pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Jal_vihar_ke_pad"},
  { id: 16, title: "Jhulan_bhog_ke_pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Jhulan_bhog_ke_pad"},
  { id: 17, title: "Mangal_gaan", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Mangal_gaan"},
  { id: 18, title: "Rasik_Naam_Dwani_Kirtan", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Rasik_Naam_Dwani_Kirtan"},
  { id: 19, title: "Rathyatrakepad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Rathyatrakepad"},
  { id: 20, title: "Sanjhi_Utsav_Ke_Pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Sanjhi_Utsav_Ke_Pad"},
  { id: 21, title: "Shri_Karuna_beli", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Shri_Karuna_beli"},
  { id: 22, title: "Shri_Vrindavan_shat_lila", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Shri_Vrindavan_shat_lila"},
  { id: 23, title: "Shrihit_Stuf_Wani", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Shrihit_Stuf_Wani"},
  { id: 24, title: "Sohani_Sewa", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Sohani_Sewa"},
  { id: 25, title: "Vanchandra_ji_ke_pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Vanchandra_ji_ke_pad"},
  { id: 26, title: "Vrindavan_dham_ko_mandal", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Vrindavan_dham_ko_mandal"},
  { id: 27, title: "Yamunashtak", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Yamunashtak"},
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