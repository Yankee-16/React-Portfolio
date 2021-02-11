import React, { Component } from "react";

class SkillList extends Component {
  render() {
    return (
      <div>
        <div className="bars">
          <ul className="skills">
            <li>
              <span className="bar-expand cpp"></span>
              <em>C/C++</em>
            </li>
            <li>
              <span className="bar-expand python"></span>
              <em>Python</em>
            </li>
            <li>
              <span className="bar-expand problem-solving"></span>
              <em>Problem Solving</em>
            </li>
            <li>
              <span className="bar-expand django"></span>
              <em>Django</em>
            </li>
            <li>
              <span className="bar-expand html5"></span>
              <em>HTML5</em>
            </li>
            <li>
              <span className="bar-expand css"></span>
              <em>CSS</em>
            </li>
            <li>
              <span className="bar-expand jquery"></span>
              <em>jQuery</em>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillList;
