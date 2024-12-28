import React from "react";
import { Helmet } from "react-helmet";
import UtsavCards from "../../Components/UtsavPad";
import LayoutEl from "../../Shared/LayoutEl";

const UtsavPad = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>उत्सव पद - Utsav Pad</title>
        <meta
          name="description"
          content="Discover the vibrant festivals and celebrations at Shri Radha Vallabh Sampraday. Explore the significance and rituals of various utsavs."
        />
        <meta
          name="keywords"
          content="Utsav Pad, Festivals, Celebrations, Radha Vallabh Sampraday, Spiritual Festivals, Bhakti, Hinduism"
        />
        <meta name="author" content="Aditya Kumar - Webitya Founder" />
        <meta property="og:title" content="उत्सव पद - Utsav Pad" />
        <meta
          property="og:description"
          content="Discover the vibrant festivals and celebrations at Shri Radha Vallabh Sampraday. Explore the significance and rituals of various utsavs."
        />
        <meta
          property="og:image"
          content="/path-to-your-image.jpg" // Replace with your image path
        />
        <meta property="og:url" content="https://shriradhavallabhlal.com/utsav-pad" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="उत्सव पद - Utsav Pad" />
        <meta
          name="twitter:description"
          content="Discover the vibrant festivals and celebrations at Shri Radha Vallabh Sampraday. Explore the significance and rituals of various utsavs."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" /> {/* Replace with your image path */}
        <link rel="canonical" href="https://shriradhavallabhlal.com/utsav-pad" />
      </Helmet>
      <LayoutEl>
        <UtsavCards />
      </LayoutEl>
    </>
  );
};

export default UtsavPad;
