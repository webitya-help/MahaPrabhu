import React, { useState } from "react";
import ReactPlayer from "react-player";

const CardVideo = () => {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const videoId = "Dr18adfIcBU";
  const videoUrl = `https://www.youtube.com/embed/${videoId}?si=luvG5FgMJJNxTZXb`;
  const fallbackUrl = "https://www.youtube.com/watch?v=ysz5S6PUM-U";

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f0f0f0",
        padding: "7px",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingTop: "56.25%", // 16:9 Aspect Ratio
          }}
        >
          {/* Thumbnail Section */}
          {!playing && !error && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                zIndex: 1,
              }}
              onClick={() => setPlaying(true)}
            >
              <div
                style={{
                  fontSize: "48px",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "20px 30px",
                  border: "2px solid #fff",
                  borderRadius: "5px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}
              >
                ▶
              </div>
            </div>
          )}

          {/* ReactPlayer Video Section */}
          {(playing || error) && (
            <iframe
              width="100%"
              height="100%"
              src={error ? fallbackUrl : videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            ></iframe>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div
            style={{
              padding: "10px",
              textAlign: "center",
              color: "#fff",
              backgroundColor: "#ff4d4f",
            }}
          >
            The original video is unavailable. Showing a fallback video. Please
            check the content or contact support.
          </div>
        )}

        {/* Card Footer */}
        <div
          style={{
            padding: "15px",
            textAlign: "center",
            backgroundColor: "#f7f7f7",
            borderTop: "1px solid #ddd",
          }}
        >
          <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#333" }}>
            श्री राधाष्टमी महा - महोत्सव 4 सितंबर 2022 , समाज गायन श्री राधावल्लभ मंदिर वृंदावन धाम
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
