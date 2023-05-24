import React from "react";
import "./Footer.css";

const  Footer =  () => {
const  clickHandler =  () =>{
  window.open('mailto:shahzaibrehman40@gmail.com');
}


    return (
      <>
        <div style={{ border: "1px solid" }}>
          <div className="container-ft ">
            <div className="gradient-text">
              <h1>Tell my about your next Project</h1>
            </div>
          </div>
          <div className="btn-container">
            <button onClick={clickHandler} className="glow-on-hover ">
              Get in touch
            </button>
          </div>
        </div>
        <footer className="footer">
          <p className="para">© 2023 All rights reserved.</p>
          <div class="links">
            <a className="a-tag" href="https://www.linkedin.com/in/shahzaib-rehman-1246591a6/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="a-tag" href="https://github.com/shahzaibrehman123" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a className="a-tag" href="https://www.kaggle.com/shahzaibrehman" target="_blank" rel="noopener noreferrer">
              Kaggle
            </a>
          </div>
        </footer>
      </>
    );
  }


export default Footer;
