import React, { useState } from "react";

const santData = [
    {
      id: 1,
      title: "Goswami Shri Hit Harivansh Mahaprabhu ji",
      description: "Goswami Hit Harivansh Mahaprabhu ji incarnation of Sri Priya Pritam ju’s flute who is Hit Sajni ju in Nikunj. Mahaprabhu ji spread Shri Priya pritam’s divine nectarian eternal pastimes Hit Prem Rasbhakti to rasiks. Mahaprabhu ji offer services to his beloved Shri Radhavallabh lal ji in Unchi Thor under dense grove now it is old Radhavallabh Temple or Shri Hit Harivansh Mahaprabhuji Temple.",
      imageUrl: "/Sant Darshan/1.png"
    },
    {
      id: 2,
      title: "Shri Hariram Vyas ji",
      description: "Hariram Vyas (Samvat 1567 - 1689) was a high-ranking devotee and poet of the Radhavallabh sect. He is incarnation of Vishakha Sakhi. He is disciple of Shri Hit Harivansh Mahaprabhu ji. Shri Hariram vyas ji revealed Shri Jugal Kishore ji from well in Kishore Van, Vrindavan and today established in Panna city of Madhya Pradesh. He is composer of “Vyas vani”",
      imageUrl: "/Sant Darshan/hariramvyasji.png"
    },
    {
      id: 3,
      title: "Shri Hit Sewak ji Maharaj",
      description: "Damodardasji, who became known as “Sewak ji,” held a unique place in the practice of seva (selfless service). Shri Sewak ji maharaj compose Sewak Vani which is footfall of Shir Radhavallabh sec. His dedication to the service of his Guru and spiritual duties made him stand out among all the followers of the Hit lineage. The name of Shri Harivansh and his divine teachings were more dear to Sevak ji than his own life.",
      imageUrl: "/Sant Darshan/sewak ji.png"
    },
    {
      id: 4,
      title: "Shri Hit Dhruva das ji Maharaj",
      description: "Shri Hita Dhruvdas was the disciple of Shri Gopinath, the third son of Shri Hita Harivansh Mahaprabhu of Shri Radha Vallabh sect. His compositions are very famous in Shri Vrindavan Dham, and among the devotees who follow Vrindavana's Rasopasna. He compossed Bayalees Leela and Vrindavan Shat Leela.",
      imageUrl: "/Sant Darshan/dhruvdasji.png"
    },
    {
      id: 5,
      title: "Shri Hit Neh Nagri Das ji",
      description: "Shri Hit Neh Nagaridas ji born around 1590 in Berchha village Madhya Pradesh, in a rich Panwar Kshatriya family. Once Shri Hit Chaturbhuj das ji visited his village along with the saint congregation for satsang he got attracted towards nitya vihar upasna. He is disciple of Radhavallabh Acharya Goswami Vanchnadra ji. Nagaridas Ji gave a very delicious meal to sriji when she appeared with her sakhiya after playing pastime with lal ji  at midnight and continued to live this rule of Nishith-Bhog (kheer and puri). At that time, Radha Ji had said to build a temple in Barsana and celebrate the birth anniversary every year.",
      imageUrl: "/Sant Darshan/11.jpg"
    },
    {
      id: 6,
      title: "Shri Hit Chacha Vrindavan Das ji",
      description: "Shri Hit Vrindavan Das Ji was born in Brajdham, He was the most benevolent disciple of Radhavallabh sec. Acharya Hitavatansh Rasavanshiya Goswami Sri Harilal Vyas Ji's son, immersed in divine couple's nectar, Goswami Shri Hit Rooplal Ji. Chacha Vrindavan das ji compossed many padawali such as Karuna Beli , Yugal Sneh Patrika, Shri Radha roop Pratap beli, Shri Vrindavan Jas prakas beli, Aarat patrika beli , Bhakti prarthna beli , Vivek Lakshan Beli.",
      imageUrl: "/Sant Darshan/chachavrindavandasji.png"
    },
    {
      id: 7,
      title: "Goswami Shri Hit Kamal Nayan ji Maharaj",
      description: "Goswami Shri Hit Kamalnayan Ji was a great poet of Shri Radhavallabh sect. He was born in the lineage of Shri Hita Harivansh Mahaprabhu ji in Vrindavan. Samay Prabandha, Asthyam, Utsav Padawali Varshotsav the verses of Basant Holi, Pjooldol, Chandan Rachna Phool Rachna, Jhulan etc have been found.",
      imageUrl: "/Sant Darshan/harivansh ji mahaprabhu.png"
    },
    {
      id: 8,
      title: "Goswami Shri Hit Krishn Chandra Ji",
      description: "Goswami Shri Hita Krishn Chandra ji, a Rasik saint of Vrindavan and 2nd son of Great Rasik Shiromani Shri Hita Harivansh Mahaprabhu. He composed Shri Radha Upsudha Nidhi. Early days he reside in Deoband and offering service to Shri Navrangi Lal ji who revealed by Shri Hit Harivansh Mahprabhu ji from well in their courtyard.",
      imageUrl: "/Sant Darshan/krishna das ji.png"
    },
    {
      id: 9,
      title: "Goswami Shri Hit Vanchandra Ji Maharaj",
      description: "Goswami Hit Vanchandra Goswami Ji maharaj was the eldest son of Shri Hit Harivansh Mahaprabhu. He was born on the 6th day of the dark fortnight in the month of Chaitra (April) in 1528 in Deoband. He was built first red stone temple in Vrindavan for Shri Radhavallabh lal ji in 1584.",
      imageUrl: "/Sant Darshan/vanchandra.png"
    },
    {
      id: 10,
      title: "Goswami Shri Hit Chandralal ji",
      description: "Goswami Shri Hit Chandralal ji was contemporary of Shri Hit Chacha Vrindavan Das ji , a Rasik of Shri Radha Vallabh Sec. He was in the lineage of Shri Kishori ji who is daughter of Goswami Shri Hit Vanchandra ji. He composed Bhavana Pacchisi, Vrindavan Prakash Mala, Abhilash Battisi etc.",
      imageUrl: "/Sant Darshan/vithal vipul dev ji.png"
    }
  ];
  

const SantDarshanCmp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState(4); // Initial visible items for mobile
  const itemsPerPage = 4; // Number of items per page for desktop and "Load More"

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + itemsPerPage);
  };

  const totalPages = Math.ceil(santData.length / itemsPerPage);
  const paginatedData = santData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const visibleData = santData.slice(0, visibleItems); // Data for "Load More" on mobile

  return (
    <div className="p-4 my-14" style={{ userSelect: "none" }}>
      {/* Responsive Grid */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {window.innerWidth <= 768
          ? visibleData.map((sant) => (
              <div
                key={sant.id}
                className="flex flex-col sm:flex-row border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                {/* Image Section */}
                <div
                  className="relative flex-shrink-0 p-2"
                  onClick={() => handleImageClick(sant.imageUrl)}
                >
                  <img
                    src={sant.imageUrl}
                    alt={sant.title}
                    className="w-full sm:w-48 sm:h-48 object-cover rounded-md"
                    loading="lazy"
                  />
                  {/* Glossy Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-25 hover:opacity-0 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {sant.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">{sant.description}</p>
                </div>
              </div>
            ))
          : paginatedData.map((sant) => (
              <div
                key={sant.id}
                className="flex flex-col sm:flex-row border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                {/* Image Section */}
                <div
                  className="relative flex-shrink-0 p-2"
                  onClick={() => handleImageClick(sant.imageUrl)}
                >
                  <img
                    src={sant.imageUrl}
                    alt={sant.title}
                    className="w-full sm:w-48 sm:h-48 object-cover rounded-md"
                    loading="lazy"
                  />
                  {/* Glossy Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-25 hover:opacity-0 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {sant.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">{sant.description}</p>
                </div>
              </div>
            ))}
      </div>

      {/* Pagination for Desktop */}
      {window.innerWidth > 768 && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-1 px-4 py-2 border rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border-blue-500"
              } transition-colors duration-300`}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      {/* Load More Button for Mobile */}
      {window.innerWidth <= 768 && visibleItems < santData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-black text-3xl font-bold"
              onClick={handleCloseModal}
              style={{ outline: "none" }}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full-screen view"
              className="object-contain mx-auto rounded-md shadow-lg"
              style={{ maxHeight: "75vh", maxWidth: "100%" }}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SantDarshanCmp;
