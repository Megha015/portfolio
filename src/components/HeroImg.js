import React, { useEffect } from "react";
import IntroImg from "../assets/Picture5.jpg";
import NewImage from "../assets/me.jpg";
import AwsImage from "../assets/aws2.png";
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

      <div>
        <div className="right-side-text">
          <p data-aos="fade-left">HTML 5</p>
          <p data-aos="fade-up">CSS 3</p>

          <p data-aos="fade-up">Express</p>
          <p data-aos="fade-right">JavaScript</p>
          <p data-aos="fade-up">TypeScript</p>

          <p data-aos="fade-left">jQuery</p>
        </div>

        <div className="another-text">
          <p data-aos="fade-left">React JS.</p>
          <p data-aos="fade-up">Angular JS.</p>
          <p data-aos="fade-right">Node JS</p>
          {/* <p data-aos="fade-right">JavaScript</p>
          <p data-aos="fade-up">TypeScript</p> */}

          <img
            className="aws"
            data-aos="fade-left"
            src={AwsImage}
            alt="not found"
            height={80}
            width={180}
          />
        </div>
      </div>
    </div>
  );
};
