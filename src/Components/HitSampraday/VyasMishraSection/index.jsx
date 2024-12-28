import React from 'react';

const VyasMishraSection = () => {
  return (
    <section className="relative py-16 px-4 bg-gray-100 text-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("/AboutImage.png")' }} // Replace with actual image path
      ></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 uppercase tracking-wide">
          श्री व्यास मिश्रा को शाही ज्योतिषी एवं चार हज़ार मंसोदर की उपाधि
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          पाँच सौ वर्ष पूर्व बर्बर मुसलमानों का शासन था , संवत १५०८ की बात है बहलोल लोदी दिल्ली के शाही तख्त
          पे था। उसे जौनपुर का शाही शार्की सुल्तान काँटे की तरह चुभ रहा था। बादशाह की शेना अस्थ प्रस्थ हो गई
          थी, बादशाह लोधी को अधिक शति पहुँची और हार के कगार पे खड़ा रह गया। लोधी का सही नाज़िम बदरुद्दीन
          अपने इल्मो से भी कुछ कर ना सखा, बादशाह के क्रोध में आकर सारे नज़ूमियो को मौत की सजा सुना दी, बदरुद्दीन
          ने बादशाह से आख़िरी मौक़ा माँग श्री व्यास मिश्रा को प्रार्थना कर बादशाह की असीम पीड़ा के लिए ले आया।
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          श्री व्यास मिश्रा जी ने अपनी ज्योतिष विद्या से बादशाह को बस चार नारियल से उनका भविष्य बता दिए और
          बाद की जीत हुई एवं शहंशाहे भारत ने श्री व्यास मिश्रा जी को शाही ज्योतिषी की उपाधि दिया एवं चार हजारी
          मंसवदार की उपाधि मिली। बादशाह के अनुरोध के बाद भी व्यास मिश्रा जी दिल्ली की शाही महल में रहने से मना कर
          अपनी ठाकुर सेवा एवं अपनी परम ज्योतिषी विद्या से साधारण लोगो को लाभ देने हेतु देवबंद आ गए।
        </p>
      </div>
    </section>
  );
};

export default VyasMishraSection;
