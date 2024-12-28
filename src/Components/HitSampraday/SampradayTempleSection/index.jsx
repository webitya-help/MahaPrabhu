import React from 'react';

const SampradayTempleSection = () => {
  const content = [
    {
      text: `वंशी प्रेमावतार प्रेमवरूप रसिकाचार्य अनन्त श्री हित हरिवंश चंद्र महाप्रभु जु महाराज के लाल
      निभृत निकुंज विलासी ठा. श्रीहित राधावल्लभ लाल जू को चिरथावल गाँव से श्री वृंदावन धाम लेकर आए।
      श्री हित हरिवंश महाप्रभु ने पाँच सो वर्ष पूर्व कार्तिक माह शुक्लपक्ष त्रयोदशी वि.स.1590 को श्री
      राधावल्लभ लाल जू को वृंदावन में विराजमान किये। उस समय, वृंदावन एक घना जंगल था, कोई संत, कोई
      भक्त नहीं थे, वृंदावन मुगल साम्राज्य के अधीन था।`,
      image: "/AboutImage.png",
    },
    {
      text: `वि.स.1590 में श्री हरिवंश जी का वृन्दावन आगमन हुआ। उनके आगमन का माह एवं तिथि यद्यपि सुनिश्चित
      नहीं है। तथापि अन्य अनेक तथ्यों को सामने रखते हुए कार्तिक माह की शुक्ल त्रियोदशी ही अनुमानित
      होती है। इसलिए श्री राधावल्लभ सम्प्रदाय में इस दिन श्री वृन्दावन प्राकट्य महोत्सव मनाने की प्राचीन
      परम्परा है।`,
      image: "/AboutImage.png",
    },
    {
      text: `श्री राधावल्लभ लाल मंदिर जिसमे आज श्रीहित राधावल्लभ लाल जू विराजमान है वो पुराने श्रीहित राधावल्लभलाल
      जी मंदिर का विस्तार है। पुराना श्रीहित राधावल्लभ लाल जी मंदिर आज श्रीहित हरिवंश महाप्रभु जी मंदिर के नाम
      से व्याखत है और यह राधावल्लभी सम्प्रदाय का मुख्य मंदिर है। यह मंदिर अब भारत पुरातत्व विभाग द्वारा संरक्षित
      स्मारक है और इसकी स्थानिक स्थापत्य रुचि प्रारंभिक एक्लेक्टिक शैली का अंतिम उदाहरण है।`,
      image: "/AboutImage.png",
    },
    {
      text: `साढ़े चार सौ वर्ष पूर्व श्री सुंदरदास भटनागर जी द्वारा निर्मित श्रीहित राधावल्लभ लाल जू के मूल मंदिर
      जो की 7 मंजिला हुया करता था, मुगल बादशाह औरंगजेब के शासनकाल में क्षतिग्रस्त कर दिया गया और अब 2
      मंजिला ही रह गया। मंदिर का निर्माण कार्य सन् 1584 को सुरु हुई, यह मंदिर वृंदावन की पहली लाल पत्थर
      की मंदिर है।`,
      image: "/AboutImage.png",
    },
  ];

  const styles = {
    section: {
      padding: "70px 0px",
      backgroundColor: "#fafafa",
      color: "#333",
      backgroundImage: 'url("/path-to-soft-pattern.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    header: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "30px",
      textTransform: "uppercase",
      color: "#4a4a4a",
      letterSpacing: "2px",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "50px",
      padding: "0 20px",
    },
    textContainer: {
      flex: 1,
      textAlign: "justify",
    },
    text: {
      fontSize: "20px",
      lineHeight: "1.8",
      color: "#555",
    },
    imageContainer: {
      flex: "0 0 300px",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    contentRow: (reverse) => ({
      display: "flex",
      flexDirection: reverse ? "row-reverse" : "row",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap", // Enable wrapping for smaller screens
    }),
    "@media (max-width: 768px)": {
      header: {
        fontSize: "28px",
      },
      contentRow: {
        flexDirection: "column", // Stack items vertically on smaller screens
        textAlign: "center",
      },
      text: {
        fontSize: "18px",
      },
      imageContainer: {
        width: "100%",
      },
    },
  };

  return (
    <section style={styles.section}>
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <h2 style={styles.header}>राधावल्लभ मंदिर</h2>
        <div style={styles.contentWrapper}>
          {content.map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.contentRow(index % 2 !== 0),
                ...(window.innerWidth <= 768 && styles["@media (max-width: 768px)"].contentRow),
              }}
            >
              <div style={styles.textContainer}>
                <p
                  style={{
                    ...styles.text,
                    ...(window.innerWidth <= 768 && styles["@media (max-width: 768px)"].text),
                  }}
                >
                  {item.text}
                </p>
              </div>
              <div
                style={{
                  ...styles.imageContainer,
                  ...(window.innerWidth <= 768 && styles["@media (max-width: 768px)"].imageContainer),
                }}
              >
                <img
                  src={item.image}
                  alt="Sampraday Temple"
                  style={styles.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampradayTempleSection;
