import React, { useEffect } from "react";
import "./HeroImgStyles3.css";

import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroImg3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="content">
      <div className="text">
        <p data-aos="fade-left" className="text1">
          Hello there! I am pleased to introduce myself as a front-end developer
          with extensive knowledge of front-end languages and a passion for
          creating aesthetically pleasing designs that enhance the user
          experience.
        </p>

        <p data-aos="fade-right" className="text2">
          My expertise in project management also enables me to work effectively
          with design teams and deliver the final product on time. As a UI
          Engineer in my previous role, I collaborated closely with the design
          team to understand the application features and user interface
          requirements. Through extensive research, I gathered inspiration from
          similar application designs and user interface modules, improving the
          overall design. I am adept at creating website and application design
          mockups, presenting updated front-end designs for final sign-off, and
          writing front-end code to build the user interface. My core strengths
          also include debugging code errors and troubleshooting software
          issues, skills that are essential in delivering top-quality web
          applications. With my considerable experience and skills, I am
          confident in my ability to deliver the best results for your project.
        </p>
        <p className="text3">
          Please refer to my{" "}
          <Link
            to="https://docs.google.com/document/d/1hKC2iOf7QKJN2k_k5I51--jzKmiZ25dI/edit"
            className="link"
            target="_blank"
          >
            resume
          </Link>{" "}
          for further details on my professional experience, skills, and
          qualifications. Thank you for considering my portfolio.
        </p>
      </div>
    </div>
  );
};

export default HeroImg3;
