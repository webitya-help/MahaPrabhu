import React, { useState } from "react";
import ReactPlayer from "react-player";

const FullWidthVideo = () => {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  // Video URL and fallback
  const videoUrl = "https://www.youtube.com/watch?v=D6xzc6dvTGo"; // Original URL
  const fallbackUrl = "https://www.youtube.com/watch?v=ysz5S6PUM-U"; // Embeddable fallback video

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000",
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
            backgroundImage: `url('https://img.youtube.com/vi/D6xzc6dvTGo/maxresdefault.jpg')`,
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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px",
              borderRadius: "50%",
            }}
          >
            ▶
          </div>
        </div>
      )}

      {/* ReactPlayer Video Section */}
      {(playing || error) && (
        <ReactPlayer
          url={error ? fallbackUrl : videoUrl}
          width="100%"
          height="100%"
          playing={playing && !error}
          controls
          onError={() => setError(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}

      {/* Error Message */}
      {error && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            backgroundColor: "#000",
          }}
        >
          <p>
            The original video is unavailable. Showing a fallback video. Please
            check the content or contact support.
          </p>
        </div>
      )}
    </div>
  );
};

export default FullWidthVideo;
