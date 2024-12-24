import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import RadhaValabhSampraday from "./Pages/RadhaValabhSampraday"
import Sahitya from "./Pages/Sahitya"
import UtsavPad from "./Pages/UtsavPad"


const App=()=>{
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hit-sampraday" element={<RadhaValabhSampraday/>}/>
        <Route path="/hit-sahitya" element={<Sahitya/>}/>
        <Route path="/utsav-pad" element={<UtsavPad/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App