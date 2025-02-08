import HomeAbRadhavallabh from "../../Components/HomePage/HomeAbRadhavallabh";
import HomePageAboutUs from "../../Components/HomePage/HomepageAbout";
import HomePageHero from "../../Components/HomePage/HomePageHero";
import HomeTimingSection from "../../Components/HomePage/HomeTiming";
import BrajSlider from "../../Elements/BrajSlider";
import PadawaliSlider from "../../Elements/PadawaliSlider";
import SantSlider from "../../Elements/SaltSlider";
import UtsavSlider from "../../Elements/UtsavSlider";
import VaniSlider from "../../Elements/VaniSlider";
import CustomCarousel from "../../Shared/CustomCarousel";
import FullWidthVideo from "../../Shared/FullWidthVideo";
import LayoutEl from "../../Shared/LayoutEl";
import VideoSection from "../../Shared/VideoSection";
import VideoSection2 from "../../Shared/VideoSection2";

const Home = () => {
    return (
        <>
            <LayoutEl>
                <HomePageHero />
                <CustomCarousel />
                <BrajSlider/>
                <HomeTimingSection/>
                <HomePageAboutUs/>
                <HomeAbRadhavallabh/>
                <UtsavSlider/>
                
                <VaniSlider/>
                <SantSlider/>
                <VideoSection/>
                <FullWidthVideo/>
                <PadawaliSlider/>
                <VideoSection2/>
            </LayoutEl>
        </>
    );
};

export default Home;
