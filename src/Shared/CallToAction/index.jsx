import React from "react";
import { Card, Button } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles

const { Meta } = Card;

const CallToAction = () => {
  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "2rem 0" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <Card
          bordered={false}
          style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Meta
            title={
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                आपकी सहायता से हम धर्म सेवा को बढ़ावा दे सकते हैं
              </h2>
            }
            description={
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                हमारे साथ जुड़कर आप मंदिर की सेवाओं और आयोजन में योगदान दे सकते
                हैं। आपके सहयोग से हम और भी प्रभावी सेवा प्रदान कर सकते हैं।
              </p>
            }
          />
          <Button
            type="primary"
            size="large"
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#1677ff",
              borderColor: "#1677ff",
              borderRadius: "4px",
            }}
          >
            आज ही संपर्क करें
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
