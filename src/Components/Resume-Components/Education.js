import React, { Component } from "react";

class Education extends Component {
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
              <li className="resume-detail-li-first">
                <div>
                  <h3 className="work-place">
                    Daffodil International University
                  </h3>
                  <h4 className="work-designation">
                    B.Sc in CSE <span>•</span>
                    <em className="date"> January 2018 - Present</em>
                  </h4>
                  <div className="work-details">
                    <p>
                      I've been studying B.Sc in CSE here for more than 3 years.
                      I'm also engaged in some extracurricular activities such
                      as organizing programming contests for freshers, training
                      juniors in DIU ACM, participate in programming contests,
                      etc.
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

export default Education;
