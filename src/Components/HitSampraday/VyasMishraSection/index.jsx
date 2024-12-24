import React from 'react';

const VyasMishraSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        padding: '50px 20px',
        backgroundColor: '#f9fafb',
        color: '#333',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/AboutImage.png")', // Replace with your actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      ></div>

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textTransform: 'uppercase',
            color: '#4a4a4a',
          }}
        >
          श्री व्यास मिश्रा को शाही ज्योतिषी एवं चार हज़ार मंसोदर की उपाधि
        </h2>

        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
          पाँच सौ वर्ष पूर्व बर्बर मुसलमानों का शासन था , संवत १५०८ की बात है बहलोल लोदी दिल्ली के शाही तख्त पे था। उसे जौनपुर का शाही शार्की सुल्तान काँटे की तरह चुभ रहा था। बादशाह की शेना अस्थ प्रस्थ हो गई थी, बादशाह लोधी को अधिक शति पहुँची और हार के कगार पे खड़ा रह गया। लोधी का सही नाज़िम बदरुद्दीन अपने इल्मो से भी कुछ कर ना सखा, बादशाह के क्रोध में आकर सारे नज़ूमियो को मौत की सजा सुना दी, बदरुद्दीन ने बादशाह से आख़िरी मौक़ा माँग श्री व्यास मिश्रा को प्रार्थना कर बादशाह की असीम पीड़ा के लिए ले आया।
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
          श्री व्यास मिश्रा जी ने अपनी ज्योतिष विद्या से बादशाह को बस चार नारियल से उनका भविष्य बता दिए और बाद की जीत हुई एवं शहंशाहे भारत ने श्री व्यास मिश्रा जी को शाही ज्योतिषी की उपाधि दिया एवं चार हजारी मंसवदार की उपाधि मिली। बादशाह के अनुरोध के बाद भी व्यास मिश्रा जी दिल्ली की शाही महल में रहने से मना कर अपनी ठाकुर सेवा एवं अपनी परम ज्योतिषी विद्या से साधारण लोगो को लाभ देने हेतु देवबंद आ गए।
        </p>
      </div>
    </section>
  );
};

export default VyasMishraSection;
