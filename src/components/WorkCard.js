import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <a href={props.view} target="_blank" rel="noopener noreferrer">
        <img src={props.imgsrc} alt="not found" className="image" />
      </a>
      <h2 className="Title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} target="_blank" className="btn">
            Webpage
          </NavLink>

          <NavLink to={props.summary} target="_blank" className="btn">
            Source Code
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
