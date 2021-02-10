import React, { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects">
          <h1>These are a few projects I've worked on so far.</h1>
          <div className="wrapper">
            <div className="single-project">
              <div className="project-img">
                <a
                  href="http://hacksprint.me/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="https://i.ibb.co/ZWvSM6Q/Bg.jpg"
                    alt="Hacksprint"
                    height="215px"
                  />

                  <div className="project-overlay">
                    <div className="project-banner">
                      <h3>Hacksprint</h3>
                    </div>

                    <div className="project-icon">
                      <i className="fa fa-external-link fa-3x"> </i>
                    </div>
                  </div>
                </a>
              </div>

              <div className="project-title">
                <a href="http://hacksprint.me/">
                  <h3>Hacksprint</h3>
                </a>
              </div>
            </div>

            <div className="single-project">
              <div className="project-img">
                <a
                  href="https://github.com/erfanul007/ExpenseXpert"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="https://i.ibb.co/8Mdf1zG/photo-2020-12-10-23-57-13.jpg"
                    alt="ExpenseXpert"
                    height="215px"
                  />

                  <div className="project-overlay">
                    <div className="project-banner">
                      <h3>ExpenseXpert</h3>
                    </div>

                    <div className="project-icon">
                      <i className="fa fa-external-link fa-3x"> </i>
                    </div>
                  </div>
                </a>
              </div>

              <div className="project-title">
                <a href="https://github.com/erfanul007/ExpenseXpert">
                  <h3>ExpenseXpert</h3>
                </a>
              </div>
            </div>

            <div className="single-project">
              <div className="project-img">
                <a
                  href="https://github.com/Yankee-16/SmartTOPC"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="https://i.ibb.co/YBnj3LT/photo-2021-02-07-12-40-11.jpg"
                    alt="SmartTOPC"
                    height="215px"
                  />

                  <div className="project-overlay">
                    <div className="project-banner">
                      <h3>SmartTOPC</h3>
                    </div>

                    <div className="project-icon">
                      <i className="fa fa-external-link fa-3x"> </i>
                    </div>
                  </div>
                </a>
              </div>

              <div className="project-title">
                <a href="https://github.com/Yankee-16/SmartTOPC">
                  <h3>SmartTOPC</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
