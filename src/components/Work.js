import React, { useEffect } from "react";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="work-container">
      <h1 data-aos="zoom-in" className="project-heading">
        My Projects
      </h1>
      <div data-aos="zoom-in" className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
