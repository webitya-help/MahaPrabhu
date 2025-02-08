import React from 'react';

const SampradayHeroBanner = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        backgroundImage: 'url("/bgab.jpg")', // Image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: '0px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat:"no-repeat",
        textAlign: 'center',
        color: '#fff',
        marginTop: '70px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Slightly transparent for a soft look
          padding: '20px 40px',
          borderRadius: '12px',
          maxWidth: '80%',
        }}
      >
        <h1
          style={{
            fontSize: '40px',
            fontWeight: '500',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            lineHeight: '1.3',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          राधावल्लभ संप्रदाय
        </h1>
      </div>
    </section>
  );
};

export default SampradayHeroBanner;
