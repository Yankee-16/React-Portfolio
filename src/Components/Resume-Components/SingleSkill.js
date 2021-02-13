import React from "react";

export default function SingleSkill(props) {
  return (
    <div>
      <div className="resume-detail-li">
        <h3 className="work-place">{props.skill.title}</h3>
        <h4 className="work-designation">
          {props.skill.specialization} <span>•</span>
          <em className="date">
            {" "}
            {props.skill.start} -{" "}
            {props.skill.ongoing ? "Present" : props.skill.end}
          </em>
        </h4>
        <div className="work-details">
          <p>{props.skill.description}</p>
        </div>
      </div>
    </div>
  );
}
