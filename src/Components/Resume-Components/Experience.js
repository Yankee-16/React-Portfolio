import React, { Component } from "react";
import SingleExperience from "./SingleExperience";
import axios from "axios";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
    };
  }

  componentDidMount() {
    axios
      .get(`/api/experiences/`)
      .then((res) => {
        const experiences = res.data;

        this.setState({ experiences });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="resume-title">
            <h3>
              <span>Experiences</span>
            </h3>
          </div>

          <div className="resume-detail">
            <ul>
              {this.state.experiences.map((experience, index) => {
                return (
                  <li
                    className={
                      index === 0
                        ? "resume-detail-li-first"
                        : "resume-detail-li"
                    }
                    key={index}>
                    <SingleExperience experience={experience} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
