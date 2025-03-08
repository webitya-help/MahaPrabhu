import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import RadhaValabhSampraday from "./Pages/RadhaValabhSampraday";
import Sahitya from "./Pages/Sahitya";
import UtsavPad from "./Pages/UtsavPad";
import SantDarshan from "./Pages/SantDarshan";
import BrajDarshan from "./Pages/BrajDarshan";
import BrajVrindavan from "./Elements/BrajPlaces/Vrindavan";
import BrajMathura from "./Elements/BrajPlaces/Mathura";
import BrajBarsana from "./Elements/BrajPlaces/Barsana";
import BrajGovardhan from "./Elements/BrajPlaces/Govardhan";
import BrajGokul from "./Elements/BrajPlaces/Gokul";
import BrajNandGaon from "./Elements/BrajPlaces/NandGaon";
import ComingSoon from "./Shared/ComingSoon";
import MehendiPad2 from "./Components/UtsavKePadEl/MehendiPad2";
import Rakhiutsav from "./Components/UtsavKePadEl/Rakhiutsav1";
import Ashtyam_Seva_Padawali from "./Components/UtsavKePadEl/Ashtyam_Seva_Padawali"
import Chandan_ke_pad from "./Components/UtsavKePadEl/Chandan_ke_pad"
import Chaupar from "./Components/UtsavKePadEl/Chaupar"
import Gend_Khel_ke_pad from "./Components/UtsavKePadEl/Gend_khel_ke_pad"
import Hits_Utsav_mangal_Badhai from "./Components/UtsavKePadEl/Hits_Utsav_mangal_Badhai"
import Holi_dhol_ke_pad from "./Components/UtsavKePadEl/Holi_dhol_ke_pad"
import Jal_vihar_ke_pad from "./Components/UtsavKePadEl/Jal_vihar_ke_pad"
import Jhulan_bhog_ke_pad from "./Components/UtsavKePadEl/Jhulan_bhog_ke_pad"
import Mangal_gaan from "./Components/UtsavKePadEl/Mangal_gaan"
import Rasik_Naam_Dwani_Kirtan from "./Components/UtsavKePadEl/Rasik_Naam_Dwani_Kirtan"
import Rathyatrakepad from "./Components/UtsavKePadEl/Rathyatrakepad"
import Sanjhi_Utsav_ke_pad from "./Components/UtsavKePadEl/Sanjhi_Utsav_ke_pad"
import Shri_karuna_beli from "./Components/UtsavKePadEl/Shri_Vrindavan_shat_lila"
import Shri_Vrindavan_shat_lila from "./Components/UtsavKePadEl/Shri_Vrindavan_shat_lila"
import Shrihit_Stuf_Wani from "./Components/UtsavKePadEl/Shrihit_Stuf_Wani"
import Sohani_Sewa from "./Components/UtsavKePadEl/Sohani_Sewa"
import Vanchandra_ji_ke_pad from "./Components/UtsavKePadEl/Vanchandra_ji_ke_janmotsav_ke_pad"
import Vrindavan_dham_ko_mandal from "./Components/UtsavKePadEl/Vrindavan_dham_ko_mandal"
import Yamunashtak from "./Components/UtsavKePadEl/Yamunashtak"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hit-sampraday" element={<RadhaValabhSampraday />} />
          <Route path="/hit-sahitya" element={<Sahitya />} />
          <Route path="/utsav-pad" element={<UtsavPad />} />
          <Route path="/sant-darshan" element={<SantDarshan />} />
          <Route path="/braj-darshan" element={<BrajDarshan />} />
          {/* Braj Places */}
          <Route path="/braj-vrindavan" element={<BrajVrindavan />} />
          <Route path="/braj-mathura" element={<BrajMathura />} />
          <Route path="/braj-barsana" element={<BrajBarsana />} />
          <Route path="/braj-govardhan" element={<BrajGovardhan />} />
          <Route path="/braj-gokul" element={<BrajGokul />} />
          <Route path="/braj-nand" element={<BrajNandGaon />} />
          {/*  */}
          <Route path="/*" element={<ComingSoon />} />
          {/* ====Utsav Pad */}
          <Route path="/mehendipad" element={<MehendiPad2/>} />
          <Route path="/rakhiutsav" element={<Rakhiutsav/>} />
          <Route path="/Ashtyam_Seva_Padawali" element={<Ashtyam_Seva_Padawali/>} />
          <Route path="/Chandan_ke_pad" element={<Chandan_ke_pad/>} />
          <Route path="/Chaupar" element={<Chaupar/>} />
          <Route path="/Gend_Khel_ke_pad" element={<Gend_Khel_ke_pad/>} />
          <Route path="/Hits_Utsav_mangal_Badhai" element={<Hits_Utsav_mangal_Badhai/>} />
          <Route path="/Holi_dhol_ke_pad" element={<Holi_dhol_ke_pad/>} />
          <Route path="/Jal_vihar_ke_pad" element={<Jal_vihar_ke_pad/>} />
          <Route path="/Jhulan_bhog_ke_pad" element={<Jhulan_bhog_ke_pad/>} />
          <Route path="/Mangal_gaan" element={<Mangal_gaan/>} />
          <Route path="/Rasik_Naam_Dwani_Kirtan" element={<Rasik_Naam_Dwani_Kirtan/>} />
          <Route path="/Rathyatrakepad" element={<Rathyatrakepad/>} />
          <Route path="/Sanjhi_Utsav_ke_pad" element={<Sanjhi_Utsav_ke_pad/>} />
          <Route path="/Shri_karuna_beli" element={<Shri_karuna_beli/>} />
          <Route path="/Shri_Vrindavan_shat_lila" element={<Shri_Vrindavan_shat_lila/>} />
          <Route path="/Shrihit_Stuf_Wani" element={<Shrihit_Stuf_Wani/>} />
          <Route path="/Sohani_Sewa" element={<Sohani_Sewa/>} />
          <Route path="/Vanchandra_ji_ke_pad" element={<Vanchandra_ji_ke_pad/>} />
          <Route path="/Vrindavan_dham_ko_mandal" element={<Vrindavan_dham_ko_mandal/>} />
          <Route path="/Yamunashtak" element={<Yamunashtak/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
