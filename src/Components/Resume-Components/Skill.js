import React, { Component } from "react";
import Contests from "./Contests";
import SkillList from "./SkillList";
import SingleSkill from "./SingleSkill";
import axios from "axios";

class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    axios.defaults.withCredentials = true;
    axios
      .get(`/api/skills/`)
      .then((res) => {
        const skills = res.data;
        this.setState({ skills });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="resume-title">
            <h3>
              <span>Skills</span>
            </h3>
          </div>

          <div className="resume-detail">
            <ul>
              <li className="resume-detail-li-first">
                <div>
                  <h3 className="work-place">Competitive Programming</h3>
                  <h4 className="work-designation">
                    DIU ACM <span>•</span>
                    <em className="date"> September 2018 - Present</em>
                  </h4>
                  <div className="work-details">
                    <p>
                      I've been a competitive programmer of DIU ACM since
                      September 2018. It all started when I participated in DIU
                      Take-off Programming Contest, Summer 2018. I was allowed
                      to be trained and join DIU ACM. Since then I've
                      participated in various programming contests representing
                      DIU. I've also engaged in problem setting, judging, and
                      organizing some programming contests. Also, I've been a
                      trainer in DIU ACM for a period. <br />
                      <br />
                      These are some contests I've participated: <br />
                    </p>
                    <Contests />
                  </div>
                </div>
              </li>

              {this.state.skills.map((skill, index) => {
                return (
                  <li key={index}>
                    <SingleSkill skill={skill} />
                  </li>
                );
              })}
            </ul>
            <SkillList />
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
