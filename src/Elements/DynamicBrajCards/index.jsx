import React, { useState } from 'react';
import { Button } from 'antd';
import { DownloadOutlined, ShareAltOutlined } from '@ant-design/icons';
import LayoutEl from '../../Shared/LayoutEl';
import { Link } from 'react-router-dom';

const DynamicBrajCards = ({ cardsData, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = selectedImage.split('/').pop();
    link.click();
  };

  const handleShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(selectedImage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <LayoutEl>
      {/* Grid of Cards */}
      <div className="py-16">
        <h1 className="text-3xl font-semibold text-center text-gray-900 my-3">{title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(card.imageUrl)}
              style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                borderRadius: '0', // Making it a perfect rectangle with sharp corners
                minWidth: '100%',
                maxWidth: '100%',
              }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-48 object-cover transition-all duration-300"
                  loading="lazy"
                  placeholder="blur"
                />
                {/* Glossy Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-25 hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Title Section */}
              <div className="pt-2 text-center">
                {/* <p className="text-xl font-medium text-gray-800">{card.templeName}</p> */}
                <p className="text-sm font-light text-gray-600">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300"
          onClick={handleCloseModal}
          style={{ userSelect: 'none' }}
        >
          <div className="relative bg-white shadow-lg transition-transform transform">
            <button
              className="absolute top-2 right-2 text-black text-3xl font-bold"
              onClick={handleCloseModal}
              style={{ outline: 'none', boxShadow: 'none' }}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full-screen"
              className="object-contain mx-auto rounded-md shadow-lg"
              style={{ width: '90%', height: '80vh' }}
              loading="lazy"
            />

            {/* Share and Download Icons */}
            <div className="absolute bottom-4 right-4 flex space-x-4">
              {/* Share Button */}
              <Link to="https://wa.link/woao1u">
              <Button
                type="primary"
                icon={<ShareAltOutlined />}
                onClick={handleShare}
                className="flex items-center space-x-2"
                title="Share Now"
                size="large"
                style={{
                  backgroundColor: '#333',
                  borderColor: '#333',
                  color: '#fff',
                }}
              >
                <span>Share Now</span>
              </Button>
              </Link>

              {/* Download Button */}
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                onClick={handleDownload}
                className="flex items-center space-x-2"
                title="Download"
                size="large"
                style={{
                  backgroundColor: '#333',
                  borderColor: '#333',
                  color: '#fff',
                }}
              >
                <span>Download</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </LayoutEl>
  );
};

export default DynamicBrajCards;
