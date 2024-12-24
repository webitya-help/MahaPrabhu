import React from 'react';

const SampradayHeroBanner = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '30vh',
        backgroundImage: 'url("/Carousel/1.jpg")', // Image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        marginTop:"70px"
      }}
    >
      <div
        style={{
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text readability
          borderRadius: '10px',
        }}
      >
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          राधावल्लभ संप्रदाय
        </h1>
      </div>
    </section>
  );
};

export default SampradayHeroBanner;
