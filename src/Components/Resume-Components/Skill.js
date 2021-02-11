import React, { Component } from "react";
import Contests from "./Contests";
import SkillList from "./SkillList";

class Skill extends Component {
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

              <li>
                <div className="resume-detail-li">
                  <h3 className="work-place">Web Development</h3>
                  <h4 className="work-designation">
                    Python and Django <span>•</span>
                    <em className="date"> April 2020 - Present</em>
                  </h4>
                  <div className="work-details">
                    <p>
                      I started web development as a hobby. I learned Python and
                      Django and worked on a few projects. Then I started to
                      learn Django REST Framework to work on a project that
                      needed REST API. Now I'm still working on DRF and learning
                      other technologies such as React.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <SkillList />
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
