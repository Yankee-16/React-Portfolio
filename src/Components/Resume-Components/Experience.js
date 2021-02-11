import React, { Component } from "react";

class Experience extends Component {
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
              <li className="resume-detail-li-first">
                <div>
                  <h3 className="work-place">DIU CPC</h3>
                  <h4 className="work-designation">
                    ACM Executive <span>•</span>
                    <em className="date"> January 2020 - January 2021</em>
                  </h4>
                  <div className="work-details">
                    <p>
                      I've volunteered as ACM Executive of the ACM wing, DIU
                      CPC. I've worked as a problem setter, judge, judging
                      director in DIU Take-off Programming Contest organized by
                      DIU CPC. Also, I've worked as a trainer in the Advanced
                      Programming Camp, which is also organized by the ACM wing,
                      DIU CPC.
                    </p>
                  </div>
                </div>
              </li>
              <li className="resume-detail-li">
                <div>
                  <h3 className="work-place">
                    Bangladesh National Cadet Corps
                  </h3>
                  <h4 className="work-designation">
                    Cadet Lance Corporal <span>•</span>
                    <em className="date"> June 2018 - Present</em>
                  </h4>
                  <div className="work-details">
                    <p>
                      I've been serving as a Cadet in Bangladesh National Cadet
                      Corps since June 2018. I've participated in some training
                      programs such as Battalion Training Camp, 2018. Also, I
                      took part in various volunteering works by this
                      organization.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
