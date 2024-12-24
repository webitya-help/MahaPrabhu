import React from 'react';

const HomePageAboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gray-50">
      {/* Image Section */}
      <div className="md:w-1/3 w-full mb-6 md:mb-0">
        <img
          src="/AboutImage.png"
          alt="Shri Hit Harivansh Mahaprabhu"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 w-full text-justify px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
          श्री हित हरिवंश महाप्रभु के बारे में
        </h1>
        <p className="text-gray-600 leading-7">
          श्री हित हरिवंश महाप्रभु जो एक दिव्य अवतार के रूप माने जाते हैं, की प्रसिद्ध श्रीराधा-कृष्ण की चेतना और भक्ति के प्रत्यक्ष के लिए जाने जाते हैं। उन्होंने न्िर्मल्ने और दीव्य के साथ योग के क्षेत्र प्रदान की महत्वकांक्को मुख किया।
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-6 mb-2">
          विरासत
        </h2>
        <p className="text-gray-600 leading-7">
          श्री हित हरिवंश महाप्रभु की विरासत अनेक असंख्य आत्माओं को प्रेरित करती रही है। उनकी जीवनी आध्यात्मिक रूप से प्रेरणाकों को जीवन के चिन्न की याद दिलाती है।
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-6 mb-2">
          उपदेश
        </h2>
        <p className="text-gray-600 leading-7">
          उनके प्रवचन भक्ति (भक्ति) की माहत्वा और प्रेम की शक्ति पर केंद्रित की थी। क्रिष्णकों के कील्प के प्रेमी में जोर दीच से प्रेरकों को प्रेरित किया।
        </p>
      </div>
    </div>
  );
};

export default HomePageAboutUs;
