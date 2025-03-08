import React from 'react';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  { id: 1, title: "Mehendi Pad ", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/mehendipad" },
  { id: 8, title: "Rakhi utsav1", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/rakhiutsav" },
  { id: 9, title: "Ashtyam Seva Pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Ashtyam_Seva_Padawali"},
  { id: 10, title: "Chandan ke Pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Chandan_ke_Pad"},
  { id: 11, title: "Chaupar", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Chaupar"},
  { id: 12, title: "Gend khel ke pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Gend_khel_ke_pad"},
  { id: 13, title: "Hits Utsav mangal Badhai", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Hits_Utsav_mangal_Badhai"},
  { id: 14, title: "Holi dhol ke pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Holi_dhol_ke_pad"},
  { id: 15, title: "Jal vihar ke pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Jal_vihar_ke_pad"},
  { id: 16, title: "Jhulan bhog ke pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Jhulan_bhog_ke_pad"},
  { id: 17, title: "Mangal gaan", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Mangal_gaan"},
  { id: 18, title: "Rasik Naam Dwani Kirtan", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Rasik_Naam_Dwani_Kirtan"},
  { id: 19, title: "Rathyatrakepad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Rathyatrakepad"},
  { id: 20, title: "Sanjhi Utsav Ke Pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Sanjhi_Utsav_Ke_Pad"},
  { id: 21, title: "Shri Karuna beli", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Shri_Karuna_beli"},
  { id: 22, title: "Shri Vrindavan shat lila", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Shri_Vrindavan_shat_lila"},
  { id: 23, title: "Shrihit Stuf Wani", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Shrihit_Stuf_Wani"},
  { id: 24, title: "Sohani Sewa", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Sohani_Sewa"},
  { id: 25, title: "Vanchandra ji ke pad", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Vanchandra_ji_ke_pad"},
  { id: 26, title: "Vrindavan dham ko mandal", imageUrl: "/Utsav/AnakutDarsha.jpeg", route: "/Vrindavan_dham_ko_mandal"},
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