import React from "react";
import "./Hero.css";
import profile from "../../Image/pp.jpeg";
import Button from '../UI/Button'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img className="hero-image" src={profile} alt="Developer" />
        <h1 className="hero-heading">Hi, I am Shahzaib</h1>
        <h2 className="gradient-text">
          <span> Building digital</span>
          <br></br>
          <span> products, brands,</span>
          <br></br>
          <span>and experience.</span>
        </h2> 

        <div>
        <Button/>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default Hero;
