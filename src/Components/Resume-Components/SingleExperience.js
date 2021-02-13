import React from "react";

export default function SingleExperience({ experience }) {
  return (
    <div>
      <div>
        <h3 className="work-place">{experience.designation}</h3>
        <h4 className="work-designation">
          {experience.institute} <span>•</span>
          <em className="date">
            {" "}
            {experience.start} -{" "}
            {experience.ongoing ? "Present" : experience.end}
          </em>
        </h4>
        <div className="work-details">
          <p>{experience.description}</p>
        </div>
      </div>
    </div>
  );
}
