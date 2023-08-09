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
          Greetings! I'm thrilled to introduce myself as a seasoned front-end
          developer, well-versed in a spectrum of front-end languages, driven by
          a fervor for crafting visually captivating designs that elevate user
          interactions.
        </p>

        <p data-aos="fade-right" className="text2">
          My proficiency in project management equips me to seamlessly
          collaborate with design teams, ensuring timely delivery of the end
          product. As a Front End Developer, I closely collaborate with the
          design team, immersing myself in application features and user
          interface requisites. My approach involves comprehensive research,
          drawing inspiration from analogous application designs and user
          interface components, thereby enhancing the overall design. I excel at
          sculpting website and application design mockups, presenting refined
          front-end designs for final approval, and translating these visions
          into tangible user interfaces through meticulous front-end code
          crafting
        </p>
        <p data-aos="fade-left" className="text3">
          Moreover, my expertise extends to the realm of databases and cloud
          technologies. I have hands-on experience working with diverse
          databases such as Oracle, SQL Server, MongoDB, and MySQL. This
          proficiency in database management empowers me to seamlessly integrate
          dynamic data into front-end interfaces, enriching user experiences.
        </p>

        <p data-aos="fade-right" className="text2">
          Furthermore, I am well-versed in modern version control systems,
          having extensively used GIT and SVN. This enables streamlined
          collaboration, efficient code management, and ensures the integrity of
          the project codebase throughout its lifecycle.
        </p>

        <p data-aos="fade-left" className="text3">
          My project methodology is deeply rooted in Agile practices. I have
          successfully worked in Agile environments, contributing to iterative
          development cycles, participating in daily standups, backlog grooming,
          sprint planning, and retrospective meetings. This approach ensures
          adaptability, transparency, and the delivery of high-quality products.
        </p>

        <p data-aos="fade-right" className="text2">
          My skillset also encompasses adeptly identifying and rectifying code
          glitches and resolving software predicaments – competencies imperative
          for producing impeccable web applications.
        </p>

        <p data-aos="fade-left" className="text3">
          Leveraging my extensive experience and honed skills, I hold unwavering
          confidence in my capacity to deliver optimal outcomes for your
          project.
        </p>
        {/* <p className="text3">
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
        </p> */}
      </div>
    </div>
  );
};

export default HeroImg3;
