import React, { useEffect } from "react";
import IntroImg from "../assets/Picture5.jpg";
import NewImage from "../assets/me.jpg";
import { Link } from "react-router-dom";
import "./HeroImgStyles.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const HeroImg = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        <img className="introImg" src={IntroImg} alt=" not loading" />
      </div>
      <Link to="/about" className="oval-link">
        <div data-aos="zoom-in" className="oval-container">
          <img className="newImg" src={NewImage} alt="New " />
        </div>
      </Link>
      <div className="content">
        <p data-aos="fade-up">Welcome to My Portfolio!</p>
        <h1>Front End Developer</h1>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
      <div className="right-side-text">
        <p>React JS.</p>
        <p>Angular JS.</p>
        <p>Next JS.</p>
        <p>Three JS.</p>
        <p>Node JS.</p>
      </div>
    </div>
  );
};
