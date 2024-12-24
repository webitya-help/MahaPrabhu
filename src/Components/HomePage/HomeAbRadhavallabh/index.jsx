import React from "react";

const HomeAbRadhavallabh = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Content (Hindi Text) */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            श्री हिट राधावल्लभ लाल के बारे में
          </h2>
          <p className="text-lg text-gray-600">
            श्री हिट राधावल्लभ लाल एक सम्मानित संत हैं जिनकी गहरी भक्ति और आध्यात्मिक उपदेशों के लिए उन्हें श्रद्धा और सम्मान प्राप्त है। वे जीवन के प्रत्येक पहलु में प्रेम और करुणा के प्रतीक हैं। उनके जीवन और उपदेशों ने कई लोगों को भक्ति (devotion) के माध्यम से दिव्य से गहरे जुड़ाव की प्रेरणा दी है।
          </p>
          <h3 className="text-xl font-semibold text-gray-800">दर्शनशास्त्र</h3>
          <p className="text-lg text-gray-600">
            श्री हिट राधावल्लभ लाल का दर्शन राधा-कृष्ण के प्रति निःस्वार्थ प्रेम के चारों ओर केंद्रित है, जिसमें यह बताया गया है कि सच्ची भक्ति केवल रीति-रिवाजों तक सीमित नहीं है, बल्कि यह प्रेम और ईमानदारी से उत्पन्न होती है। उनके उपदेश अनुयायियों को प्रेम, सेवा और भक्ति के मार्ग को अपनाने के लिए प्रेरित करते हैं।
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/AboutImage.png" // Replace with actual image URL
            alt="Shri Hit Radhavallabh Lal"
            className="rounded-lg shadow-lg w-full object-cover h-64 md:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbRadhavallabh;
