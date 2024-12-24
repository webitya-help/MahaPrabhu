import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import RadhaValabhSampraday from "./Pages/RadhaValabhSampraday"


const App=()=>{
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hit-sampraday" element={<RadhaValabhSampraday/>}/>
        
      </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App