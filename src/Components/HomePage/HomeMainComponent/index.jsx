import React, { useState } from "react";

const DarshanBooking = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-4 bg-gray-100">
      {/* Header Buttons */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-4">
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            className="bg-blue-500 text-white px-4 py-2 sm:px-6 rounded flex items-center cursor-pointer"
          >
            E-Seva
            <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute w-48 sm:w-64 bg-white shadow-lg rounded mt-2 z-10">
              <button className="block w-full text-left px-4 py-2 bg-pink-200 border-b">Shriji Seva</button>
              <button className="block w-full text-left px-4 py-2 bg-green-200 border-b text-red-600">Gaumataji Seva Bhent</button>
              <button className="block w-full text-left px-4 py-2 bg-yellow-200 border-b text-red-600">Shriji Samagri Seva Bhent</button>
              <button className="block w-full text-left px-4 py-2 bg-orange-200">e-Manorath Seva</button>
            </div>
          )}
        </div>
        <button className="bg-pink-500 text-white px-4 py-2 sm:px-6 rounded cursor-pointer">Vastra Seva</button>
        <button className="bg-yellow-500 text-white px-4 py-2 sm:px-6 rounded cursor-pointer">Darshan Booking</button>
        <button className="bg-gray-500 text-white px-4 py-2 sm:px-6 rounded cursor-pointer">Cottage Booking</button>
      </div>
      {/* Latest News & Tenders */}
      <div className="bg-red-600 text-white p-3 flex flex-col sm:flex-row justify-between mb-4">
        <span>Latest News: होली, होलिका प्रदीपन 15 …</span>
        <span>Latest Tenders <span className="text-yellow-300">New!</span></span>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {/* Darshan Time */}
        <div className="bg-white p-4 sm:p-6 rounded shadow-md">
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">🛕 Daily Darshan Time</h2>
          <ul className="text-sm space-y-2">
            <li>🔹 Mangla: 05:45am - 06:30am</li>
            <li>🔹 Shringar: 07:15am - 07:45am</li>
            <li>🔹 Gwal: 09:00am - 09:15am</li>
            <li>🔹 Rajbhog: 11:15am - 12:15pm</li>
            <li>🔹 Uthapan: 03:45pm - 04:00pm</li>
            <li>🔹 Bhog-Arti: 05:30pm - 05:55pm</li>
            <li>🔹 Shayan: 07:00pm - 07:40pm</li>
          </ul>
        </div>
        {/* Tipani & Shringar Pranalika */}
        <div className="bg-white p-4 sm:p-6 rounded shadow-md border border-gray-300 grid grid-cols-1 sm:grid-cols-2 divide-x divide-gray-300">
          {/* Left Side */}
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-l w-full">
            <div className="flex flex-col items-center mb-2 sm:mb-4">
              <h2 className="text-md font-bold">🌸 Tipani</h2>
              <div className="p-3 overflow-y-scroll h-32 sm:h-40 cursor-pointer">
                <p className="text-sm font-bold text-red-700">26 Feb, 25 (Wednesday) Teras , Krushna Paksh Phalgun</p>
                <p className="text-sm">27 Feb, 25 (Thursday) Chaudash , Krushna Paksh Phalgun</p>
                <p className="text-sm">28 Feb, 25 (Friday) Ekam , Shukla Paksh Phalgun</p>
                <p className="text-sm">01 Mar, 25 (Saturday) Duj , Shukla Paksh Phalgun</p>
                <p className="text-sm">02 Mar, 25 (Sunday) Tij , Shukla Paksh Phalgun</p>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-col justify-between p-4 w-full">
            <div className="mb-2 sm:mb-4 text-center">
              <h2 className="text-md font-bold">🖌 Shringar Pranalika</h2>
              <p className="text-sm mt-2">26-02-2025</p>
            </div>
            <div>
              <p className="text-sm italic text-gray-600 text-center">ShringarPranalika not available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarshanBooking;