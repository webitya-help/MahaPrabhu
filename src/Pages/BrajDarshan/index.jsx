import React from "react";
import { Helmet } from "react-helmet";
import BrajDarshanAll from "../../Components/BrajDarshan";
import LayoutEl from "../../Shared/LayoutEl";

const BrajDarshan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Braj Darshan - Shri Radha Vallabh Lal</title>
        <meta
          name="description"
          content="Explore the sacred sites of Braj, the land of Lord Krishna, and discover the divine experiences through Braj Darshan."
        />
        <meta
          name="keywords"
          content="Braj Darshan, Shri Radha Vallabh Lal, Braj, Krishna, Spirituality, Hinduism, Devotional"
        />
        <meta name="author" content="Aditya Kumar" />
        <meta property="og:title" content="Braj Darshan - Shri Radha Vallabh Lal" />
        <meta
          property="og:description"
          content="Explore the sacred sites of Braj, the land of Lord Krishna, and discover the divine experiences through Braj Darshan."
        />
        <meta
          property="og:image"
          content="/path-to-your-image.jpg" // Replace with the actual image path
        />
        <meta property="og:url" content="https://your-website-url.com/braj-darshan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Braj Darshan - Shri Radha Vallabh Lal" />
        <meta
          name="twitter:description"
          content="Explore the sacred sites of Braj, the land of Lord Krishna, and discover the divine experiences through Braj Darshan."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" /> {/* Replace with the actual image path */}
        <link rel="canonical" href="https://your-website-url.com/braj-darshan" />
      </Helmet>
      <LayoutEl>
        <BrajDarshanAll />
      </LayoutEl>
    </>
  );
};

export default BrajDarshan;
