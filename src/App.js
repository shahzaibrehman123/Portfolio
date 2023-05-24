import React from "react";
import Navbar from "./components/UI/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import SwiperSlider from "./components/Swiper/Swiper";
import BottomSection from "./components/BottomSection/BottomSection";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="bg">
      <BrowserRouter>
        <Navbar />
        <Hero/>
        <SwiperSlider/>
        <BottomSection/>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
