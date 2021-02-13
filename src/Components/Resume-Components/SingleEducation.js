import React from "react";

export default function SingleEducation(props) {
  return (
    <div>
      {console.log(props.education.degree)}
      <h3 className="work-place">{props.education.institute}</h3>
      <h4 className="work-designation">
        {props.education.degree} <span>•</span>
        <em className="date">
          {" "}
          {props.education.start} -{" "}
          {props.education.ongoing ? "Present" : props.education.end}
        </em>
      </h4>
      <div className="work-details">
        <p>{props.education.description}</p>
      </div>
    </div>
  );
}
