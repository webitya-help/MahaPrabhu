import React from "react";
import { Row, Col, Card } from "antd";
import ReactPlayer from "react-player";

const VideoSection2 = () => {
  const videos = [
    {
      url: "https://www.youtube.com/live/pkS1aJYqsrY?si=bNMVhHeoZrNFYeAL",
      title: "Live - Day - 1 !! श्री राधाबल्लभ सत्संग समिति !! धनबाद !! परम पूज्य श्री हित प्रताप चंद्र गोस्वामी",
      description: "",
    },
    {
      url: "https://www.youtube.com/live/KF8XuDi1_Ls?si=_gbNnIhyruGidAXx",
      title: "Live - Day - 2 !! श्री राधाबल्लभ सत्संग समिति !! धनबाद !! परम पूज्य श्री हित प्रताप चंद्र गोस्वामी",
      description: "",
    },
    {
      url: "https://www.youtube.com/live/ee9a7hfl02c?si=xJi7wzgXPbyVvnI2",
      title: "Live - Day - 3 !! श्री राधाबल्लभ सत्संग समिति !! धनबाद !! परम पूज्य श्री हित प्रताप चंद्र गोस्वामी",
      description: "",
    },
  ];

  return (
    <section style={{ padding: "2rem 1rem", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#333",
        }}
      >
        श्रीमद भागवत कथा

      </h2>
      <Row gutter={[16, 16]}>
        {videos.map((video, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              bordered={false}
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingTop: "56.25%", // 16:9 aspect ratio
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                  controls
                />
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#333",
                  margin: "1rem 0 0.5rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {video.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  margin: "0",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {video.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default VideoSection2;
