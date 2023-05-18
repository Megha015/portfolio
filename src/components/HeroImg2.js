import React, { useEffect } from "react";
import "./HeroImg2Styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroImg2 = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="hero-img">
      <div className="heading">
        <h1 data-aos="zoom-in">{props.project}</h1>
        <p data-aos="fade-right">{props.text}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
