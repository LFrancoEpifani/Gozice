import Header from "./components/Header"
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";

export default function App() {


  return (
    <>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<AboutUs />} />
      </Routes>
   </BrowserRouter>
       
    </>
  )
}


