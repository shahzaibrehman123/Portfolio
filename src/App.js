import React from "react";
import Navbar from "./components/UI/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import SwiperSlider from "./components/Swiper/Swiper";
import BottomSection from "./components/BottomSection/BottomSection";

function App() {

  return (
    <div className="bg">
      <BrowserRouter>
        <Navbar />
        <Hero/>
        <SwiperSlider/>
        <BottomSection/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
