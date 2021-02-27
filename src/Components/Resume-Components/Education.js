import React, { Component } from "react";
import SingleEducation from "./SingleEducation";
import axios from "axios";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educations: [],
    };
  }

  componentDidMount() {
    axios.defaults.withCredentials = true;
    axios
      .get(`/api/educations/`)
      .then((res) => {
        const educations = res.data;
        this.setState({ educations });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="resume-title">
            <h3>
              <span>Education</span>
            </h3>
          </div>

          <div className="resume-detail">
            <ul>
              {this.state.educations.map((education, index) => {
                return (
                  <li
                    className={
                      index === 0
                        ? "resume-detail-li-first"
                        : "resume-detail-li"
                    }
                    key={index}>
                    <div>
                      <SingleEducation education={education} />
                    </div>
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

export default Education;
