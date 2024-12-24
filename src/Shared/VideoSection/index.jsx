import React from "react";
import { Row, Col, Card } from "antd";
import ReactPlayer from "react-player";

const VideoSection = () => {
  const videos = [
    {
      url: "https://youtu.be/rgYrInORVu8?si=7-4WzUGAukge7PGH",
      title: "Video 1",
      description: "Brief description of video one content.",
    },
    {
      url: "https://youtu.be/OdSNTgOn9Dc?si=3qpeYj04AR3c-bD1",
      title: "Video 2",
      description: "Brief description of video two content.",
    },
    {
      url: "https://youtu.be/z-fnd8OReuQ?si=lfdMXh1UUntRLcW4",
      title: "Video 3",
      description: "Brief description of video three content.",
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
        Video Section
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
                }}
              >
                {video.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                {video.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default VideoSection;
