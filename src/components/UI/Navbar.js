import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
       
        <a href="mailto:shahzaibrehman40@gmail.com" className="navbar-logo" onClick={closeMobileMenu}>
          <i className="fa-sharp fa-solid fa-envelope " />

          <span style={{marginLeft:'10px'}}>Get in touch</span>
        </a>
  
        
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/shahzaib-rehman-1246591a6/" className="nav-links" onClick={closeMobileMenu}>
              LinkedIn /
            </a>
          </li>

          <li className="nav-item">
            <a href="https://github.com/shahzaibrehman123" className="nav-links" onClick={closeMobileMenu}>
              Github /
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.kaggle.com/shahzaibrehman" className="nav-links" onClick={closeMobileMenu}>
              Kaggle
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
