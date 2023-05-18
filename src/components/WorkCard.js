import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="not found" className="image" />
      <h2 className="Title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} target="_blank" className="btn">
            View
          </NavLink>
          {/* <NavLink to="url.com" className="btn">
            Source
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
