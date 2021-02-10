import React, { Component } from "react";

export class Resume extends Component {
  render() {
    return (
      <div>
        <div id="resume">
          <ul>
            <li className="resume-item">
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
                            I've been studying B.Sc in CSE here for more than 3
                            years. I'm also engaged in some extracurricular
                            activities such as organizing programming contests
                            for freshers, training juniors in DIU ACM,
                            participate in programming contests, etc.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="resume-item">
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
                            September 2018. It all started when I participated
                            in DIU Take-off Programming Contest, Summer 2018. I
                            was allowed to be trained and join DIU ACM. Since
                            then I've participated in various programming
                            contests representing DIU. I've also engaged in
                            problem setting, judging, and organizing some
                            programming contests. Also, I've been a trainer in
                            DIU ACM for a period. <br />
                            <br />
                            These are some contests I've participated: <br />
                          </p>
                          <div
                            className="table-container"
                            style={{ overflowX: "auto" }}>
                            <table>
                              <thead>
                                <th>Contest</th>
                                <th>Team</th>
                                <th>Rank</th>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    DIU Take-off Programming Contest, Spring
                                    2018
                                  </td>
                                  <td>N/A</td>
                                  <td>
                                    9<sup>th</sup>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    DIU Take-off Programming Contest, Summer
                                    2018
                                  </td>
                                  <td>N/A</td>
                                  <td>
                                    6<sup>th</sup>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    DIU Intra University Programming Contest
                                    2019
                                  </td>
                                  <td>N/A</td>
                                  <td>
                                    3<sup>rd</sup>
                                  </td>
                                </tr>
                                <tr>
                                  <td>ICPC Dhaka Regional 2019</td>
                                  <td>DIU Voids</td>
                                  <td>
                                    60<sup>th</sup>
                                  </td>
                                </tr>
                                <tr>
                                  <td>MIST NCPC 2020</td>
                                  <td>DIU Voids</td>
                                  <td>
                                    90<sup>th</sup>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                            I started web development as a hobby. I learned
                            Python and Django and worked on a few projects. Then
                            I started to learn Django REST Framework to work on
                            a project that needed REST API. Now I'm still
                            working on DRF and learning other technologies such
                            as React.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
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
              </div>
            </li>
            <li className="resume-item">
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
                            I've volunteered as ACM Executive of the ACM wing,
                            DIU CPC. I've worked as a problem setter, judge,
                            judging director in DIU Take-off Programming Contest
                            organized by DIU CPC. Also, I've worked as a trainer
                            in the Advanced Programming Camp, which is also
                            organized by the ACM wing, DIU CPC.
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
                            I've been serving as a Cadet in Bangladesh National
                            Cadet Corps since June 2018. I've participated in
                            some training programs such as Battalion Training
                            Camp, 2018. Also, I took part in various
                            volunteering works by this organization.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
