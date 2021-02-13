import React from "react";

export default function SingleExpertise(props) {
  return (
    <div>
      <span
        className="bar-expand"
        style={{ width: `${props.expertise.percentage}%` }}></span>
      <em>{props.expertise.title}</em>
    </div>
  );
}
