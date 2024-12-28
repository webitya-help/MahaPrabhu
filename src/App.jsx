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
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
