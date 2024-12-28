import React from "react";
import { Helmet } from "react-helmet";
import SahityaCardsComponent from "../../Components/SahityapgEl";
import LayoutEl from "../../Shared/LayoutEl";

const Sahitya = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>श्री राधावल्लभ साहित्य - Shri Radha Vallabh Sahitya</title>
        <meta
          name="description"
          content="Explore the rich and profound literature (Sahitya) related to Shri Radha Vallabh Sampraday, featuring spiritual texts, hymns, and writings."
        />
        <meta
          name="keywords"
          content="Radha Vallabh Sahitya, Shri Radha Vallabh, Bhakti Literature, Spirituality, Hinduism, Temples, Radha Vallabh Sampraday"
        />
        <meta name="author" content="Aditya Kumar - Webitya Founder" />
        <meta property="og:title" content="श्री राधावल्लभ साहित्य - Shri Radha Vallabh Sahitya" />
        <meta
          property="og:description"
          content="Explore the rich and profound literature (Sahitya) related to Shri Radha Vallabh Sampraday, featuring spiritual texts, hymns, and writings."
        />
        <meta
          property="og:image"
          content="/path-to-your-image.jpg" // Replace with your image path
        />
        <meta
          property="og:url"
          content="https://shriradhavallabhlal.com/hit-sahitya"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="श्री राधावल्लभ साहित्य - Shri Radha Vallabh Sahitya" />
        <meta
          name="twitter:description"
          content="Explore the rich and profound literature (Sahitya) related to Shri Radha Vallabh Sampraday, featuring spiritual texts, hymns, and writings."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" /> {/* Replace with your image path */}
        <link rel="canonical" href="https://shriradhavallabhlal.com/hit-sahitya" />
      </Helmet>
      <LayoutEl>
        <SahityaCardsComponent />
      </LayoutEl>
    </>
  );
};

export default Sahitya;
