import React, { Component } from "react";

import Education from "./Resume-Components/Education";
import Experience from "./Resume-Components/Experience";
import Skill from "./Resume-Components/Skill";

export class Resume extends Component {
  render() {
    return (
      <div>
        <div id="resume">
          <ul>
            <li className="resume-item">
              <Education />
            </li>
            <li className="resume-item">
              <Skill />
            </li>
            <li className="resume-item">
              <Experience />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
