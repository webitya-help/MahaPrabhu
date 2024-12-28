import React from "react";
import { Helmet } from "react-helmet";
import SantDarshanCmp from "../../Components/SantDarshan";
import LayoutEl from "../../Shared/LayoutEl";

const SantDarshan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>श्री संत दर्शन - Shri Sant Darshan</title>
        <meta
          name="description"
          content="Explore the teachings, discourses, and life experiences of saints in the Shri Radha Vallabh Sampraday. Discover the essence of spiritual wisdom."
        />
        <meta
          name="keywords"
          content="Sant Darshan, Radha Vallabh Sampraday, Spiritual Wisdom, Saints, Teachings, Discourses, Spirituality, Bhakti"
        />
        <meta name="author" content="Aditya Kumar - Webitya Founder" />
        <meta property="og:title" content="श्री संत दर्शन - Shri Sant Darshan" />
        <meta
          property="og:description"
          content="Explore the teachings, discourses, and life experiences of saints in the Shri Radha Vallabh Sampraday. Discover the essence of spiritual wisdom."
        />
        <meta
          property="og:image"
          content="/path-to-your-image.jpg" // Replace with your image path
        />
        <meta property="og:url" content="https://shriradhavallabhlal.com/sant-darshan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="श्री संत दर्शन - Shri Sant Darshan" />
        <meta
          name="twitter:description"
          content="Explore the teachings, discourses, and life experiences of saints in the Shri Radha Vallabh Sampraday. Discover the essence of spiritual wisdom."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" /> {/* Replace with your image path */}
        <link rel="canonical" href="https://shriradhavallabhlal.com/sant-darshan" />
      </Helmet>
      <LayoutEl>
        <SantDarshanCmp />
      </LayoutEl>
    </>
  );
};

export default SantDarshan;
