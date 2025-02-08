import React from "react";
import { Helmet } from "react-helmet";
import SampradayHeroBanner from "../../Components/HitSampraday/SampradayHero";
import SampradayTempleSection from "../../Components/HitSampraday/SampradayTempleSection";
import VyasMishraSection from "../../Components/HitSampraday/VyasMishraSection";
import LayoutEl from "../../Shared/LayoutEl";
import SantSliderAbout from "../../Components/HitSampraday/SantSlider";
import BottomSectionAbout from "../../Components/HitSampraday/BottomSectionAbout";

const RadhaValabhSampraday = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>श्री राधावल्लभ समप्रदाय - Shri Radha Vallabh Sampraday</title>
        <meta
          name="description"
          content="Learn about Shri Radha Vallabh Sampraday, its teachings, temples, and the rich history of the Radha Vallabh tradition."
        />
        <meta
          name="keywords"
          content="Radha Vallabh Sampraday, Shri Radha Vallabh, Sampraday, Temples, Vyas Mishra, Spirituality, Bhakti, Hinduism"
        />
        <meta name="author" content="Aditya Kumar - Webitya Founder" />
        <meta property="og:title" content="श्री राधावल्लभ समप्रदाय - Shri Radha Vallabh Sampraday" />
        <meta
          property="og:description"
          content="Learn about Shri Radha Vallabh Sampraday, its teachings, temples, and the rich history of the Radha Vallabh tradition."
        />
        <meta
          property="og:image"
          content="/path-to-your-image.jpg" // Replace with your image path
        />
        <meta
          property="og:url"
          content="https://shriradhavallabhlal.com/hit-sampraday"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="श्री राधावल्लभ समप्रदाय - Shri Radha Vallabh Sampraday" />
        <meta
          name="twitter:description"
          content="Learn about Shri Radha Vallabh Sampraday, its teachings, temples, and the rich history of the Radha Vallabh tradition."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" /> {/* Replace with your image path */}
        <link rel="canonical" href="https://shriradhavallabhlal.com/hit-sampraday" />
      </Helmet>
      <LayoutEl>
        <SampradayHeroBanner />
        <SampradayTempleSection />
        <div className="pl-10 text-3xl">
        <h1> राधावल्लभ संप्रदाय के अन्य मुख्य मंदिरों की दर्शन
        </h1>
        </div>
        <SantSliderAbout/>
        <BottomSectionAbout/>
        {/* <VyasMishraSection /> */}
      </LayoutEl>
    </>
  );
};

export default RadhaValabhSampraday;
