import { WhatsAppOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SantDarshanCmp = () => {
  const [selectedSant, setSelectedSant] = useState(null);

  const santData = [
    {
      id: 1,
      title: "गोस्वामी हित हरिवंश महाप्रभु जी",
      description: "गोस्वामी हित हरिवंश महाप्रभु जी श्री प्रिया प्रीतम जू के  बांसुरी के अवतार है, एवं निकुंज में प्रिय प्रीतम के रसमयी प्रेम से प्रकट श्रीहित सजनी सखी जू हैं। महाप्रभु जी ने श्री प्रिया प्रीतम की दिव्य अमृतमय शाश्वत लीला हित प्रेम रसभक्ति को रसिकों तक फैलाया। महाप्रभु जी अपने प्रिय श्री राधावल्लभ लाल जी को वृंदावन में पधारकर ऊंची ठोर के सघन में लता-पता से  श्रीजी के लिए निकुंज बना कर श्रीजी राधावल्लभ लाल जी के विग्रह को स्थापित किए  , अब यह पुराना राधावल्लभ मंदिर या श्री हित हरिवंश महाप्रभुजी मंदिर है।",
      imageUrl: "/Sant Darshan/vanshi.jpeg"
    },
    {
      id: 2,
      title: "श्री हरिराम व्यास",
      description: "हरिराम व्यास (संवत् 1567-1689) राधावल्लभ संप्रदाय के उच्च कोटि के भक्त एवं कवि थे। वे विशाखा सखी के अवतार हैं। वे श्री हित हरिवंश महाप्रभु जी के शिष्य हैं। श्री हरिराम व्यास जी ने श्री जुगल किशोर जी को किशोर वन, वृन्दावन के कुँए से प्रकट किया और आज मध्य प्रदेश के पन्ना शहर में स्थापित हैं। व्यास जी ने व्यास वाणी कि रचना की।”",
      imageUrl: "/Sant Darshan/hariramvyasj.jpeg"
    },
    {
      id: 3,
      title: "श्री हित सेवक जी महाराज",
      description: "दामोदरदासजी, जिन्हें सेवक जी के नाम से जाना जाता है, ने सेवा (निःस्वार्थ सेवा) के अभ्यास में एक अद्वितीय स्थान रखा। श्री सेवक जी महाराज ने सेवक वाणी की रचना की जो श्री राधावल्लभ धारा का चरणपाद है। अपने गुरु की सेवा और आध्यात्मिक कर्तव्यों के प्रति उनके समर्पण ने उन्हें हित  वंश के सभी अनुयायियों के बीच खड़ा कर दिया। सेवक जी को श्री हरिवंश का नाम और उनकी दिव्य शिक्षाएँ अपने प्राणों से भी अधिक प्रिय थीं।",
      imageUrl: "/Sant Darshan/sewakj.jpeg"
    },
    {
      id: 4,
      title: "श्री हित ध्रुव दास जी महाराज",
      description: "श्री हित ध्रुवदास श्री राधावल्लभ संप्रदाय के श्री हित हरिवंश महाप्रभु के तीसरे पुत्र श्री गोपीनाथ के शिष्य थे। उनकी रचनाएँ श्री वृन्दावन धाम और वृन्दावन की रसोपासना का पालन करने वाले भक्तों के बीच बहुत प्रसिद्ध हैं। उन्होंने बयालीस लीला और वृन्दावन शत लीला की रचना की।",
      imageUrl: "/Sant Darshan/dhruvdasj.jpeg"
    },
    {
      id: 5,
      title: "श्री हित नेह नागरी दास जी",
      description: "श्री हित नेह नागरीदास जी का जन्म 1590 के आसपास मध्य प्रदेश के बेरछा गांव में एक धनी पंवार क्षत्रिय परिवार में हुआ था। एक बार श्री हित चतुर्भुज दास जी सत्संग के लिए संत मंडली के साथ अपने गाँव आये तो वे नित्य विहार उपासना की ओर आकर्षित हो गये। वे राधावल्लभ आचार्य गोस्वामी वंचनाद्र जी के शिष्य हैं। आधी रात को लाल जी के साथ लीला करने के बाद जब श्रीजी अपनी सखिया के साथ प्रकट हुईं तो नागरीदास जी ने उन्हें बहुत स्वादिष्ट भोजन दिया और निशीथ-भोग (खीर और पूरी) का यह नियम जारी रखा। उस समय राधा जी ने बरसाना में एक मंदिर बनाने और हर साल जन्मोत्सव मनाने की बात कही थी।",
      imageUrl: "/Sant Darshan/11.jpg"
    },
    {
      id: 6,
      title: "श्री हित चाचा वृन्दावन दास जी",
      description: "श्री हित वृन्दावन दास जी का जन्म ब्रजधाम में हुआ था, वे राधावल्लभ संप्रदाय के परम परोपकारी शिष्य थे। दिव्य युगल रस में डूबे आचार्य हितवतंश रसवंशीय गोस्वामी श्री हरिलाल व्यास जी के सुपुत्र गोस्वामी श्री हित रूपलाल जी। चाचा वृन्दावन दास जी ने करुणा बेली, युगल स्नेह पत्रिका, श्री राधा रूप प्रताप बेली, श्री वृन्दावन जस प्रकाश बेली, आरत पत्रिका बेली, भक्ति प्रार्थना बेली, विवेक लक्षण बेली जैसी कई पदावली की रचना की।",
      imageUrl: "/Sant Darshan/chachavrindavandasj.jpeg"
    },
    {
      id: 7,
      title: "गोस्वामी श्री हित कमल नयन जी महाराज",
      description: "गोस्वामी श्री हित कमलनयन जी श्री राधावल्लभ संप्रदाय के महान कवि थे। उनका जन्म श्री हित हरिवंश महाप्रभु जी के वंश में वृन्दावन में हुआ था। समय प्रबंध, अष्टयाम, उत्सव पदावली वर्षोत्सव बसंत होली, पजूलडोल, चंदन रचना फूल रचना, झूलन आदि के पद मिले हैं।",
      imageUrl: "/Sant Darshan/harivanshjimahaprabh.jpeg"
    },
    {
      id: 8,
      title: "गोस्वामी श्री हित कृष्ण चन्द्र जी",
      description: "गोस्वामी श्री हित कृष्ण चंद्र जी, वृन्दावन के रसिक संत और महान रसिक शिरोमणि श्री हित हरिवंश महाप्रभु के दूसरे पुत्र। उन्होंने श्री राधा उपसुधा निधि की रचना की। शुरुआती दिनों में वह देवबंद में रहते थे और श्री नवरंगी लाल जी की सेवा करते थे, जिन्हें श्री हित हरिवंश महप्रभु जी ने उनके आंगन में कुएं से प्रकट किया था।",
      imageUrl: "/Sant Darshan/krishnadasj.jpeg"
    },
    {
      id: 9,
      title: "गोस्वामी श्री हित वनचन्द्र जी महाराज",
      description: "गोस्वामी हित वनचन्द्र गोस्वामी जी महाराज श्री हित हरिवंश महाप्रभु के ज्येष्ठ पुत्र थे। उनका जन्म चैत्र (अप्रैल) महीने के कृष्ण पक्ष की षष्ठी तिथि को 1528 में देवबंद में हुआ था। उन्होंने 1584 में श्री राधावल्लभ लाल जी के लिए वृन्दावन में पहला लाल पत्थर का मंदिर बनवाया था।",
      imageUrl: "/Sant Darshan/vanchandr.jpeg"
    },
    {
      id: 10,
      title: "गोस्वामी श्री हित चन्द्रलाल जी",
      description: "गोस्वामी श्री हित चंद्रलाल जी श्री राधा वल्लभ संप्रदाय के रसिक श्री हित चाचा वृन्दावन दास जी के समकालीन थे। वह श्री किशोरी जी के वंश में थे जो गोस्वामी श्री हित वनचंद्र जी की पुत्री हैं। उन्होंने भावना पच्चीसी, वृन्दावन प्रकाश माला, अभिलाष बत्तीसी आदि की रचना की।",
      imageUrl: "/Sant Darshan/vithalvipuldevj.jpeg"
}
];

  const handleCardClick = (sant) => {
    setSelectedSant(sant);
  };

  const handleCloseModal = () => {
    setSelectedSant(null);
  };

  return (
    <div className="p-4 my-14" style={{ userSelect: "none" }}>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {santData.map((sant) => (
          <div
            key={sant.id}
            className="flex flex-col sm:flex-row border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleCardClick(sant)}
          >
            <div className="relative flex-shrink-0 p-2">
              <img
                src={sant.imageUrl}
                alt={sant.title}
                className="w-full sm:w-48 sm:h-48 object-cover rounded-md"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-25 hover:opacity-0 transition-opacity duration-300"></div>
            </div>

            <div className="p-4 w-full">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                {sant.title}
              </h3>
              <p
                className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-4"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {sant.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full details */}
      {selectedSant && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
    onClick={handleCloseModal}
  >
    <div
      className="relative bg-white p-8 rounded-lg shadow-2xl max-w-3xl w-full transition-transform transform scale-100 hover:scale-105"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-800 text-2xl font-bold hover:text-red-600 focus:outline-none transition-colors"
        onClick={handleCloseModal}
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        {selectedSant.title}
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-lg text-justify mb-6">
        {selectedSant.description}
      </p>

      {/* Optional Action Buttons */}
      <div className="flex justify-end gap-4">
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 transition"
          onClick={handleCloseModal}
        >
          Close
        </button>

        {/* Take Action Button with WhatsApp Icon */}
        <Link
          to="https://wa.link/7oxwsq" target="_blank" // Update this to your desired route
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 focus:ring-2 focus:ring-green-500 transition"
        >
          <WhatsAppOutlined className="text-xl" /> {/* WhatsApp Icon */}
          मंदिर से जुड़े

        </Link>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default SantDarshanCmp;
