import React from "react";
export default function About() {
  return (
    <div>
      <div id="about">
        <div className="wrapper">
          <div className="profile-pic-section">
            <img
              src="https://i.ibb.co/KxnTcrn/A-DP.jpg"
              alt="myself"
              className="profile-pic"
            />
          </div>
          <div className="about">
            <h2 className="about-header">About Me</h2>
            <div className="about-info">
              I am studying Computer Science and Engineering at Daffodil
              International University. I love programming, learning, and
              creating new things. I am a competitive programmer, I engage in
              programming contests. Also, I'm working a little on web
              development. <br />
              I'm a
              <span className="tooltip">
                &nbsp;Hodophile
                <span className="tooltip-text">
                  Someone who loves to travel.
                </span>
              </span>
              . Whenever I have ample time and money, I pack my bags and set off
              to see the beautiful earth created by God.
            </div>
            <div className="about-bottom">
              <div className="address">
                <h2>Contact Details</h2>
                <p>
                  <span>Shah Habibul Imran</span> <br />
                  <span>
                    <i>
                      Dhaka, Bangladesh <br />
                      Somewhere in the Earth
                    </i>
                  </span>
                  <br />
                  <a
                    href="tel:+8801517141687"
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <span>
                      <i className="fa fa-phone"></i> +881517141687
                    </span>
                  </a>
                  <br />
                  <a
                    href="mailto:smhimran@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <span>
                      <i className="fa fa-envelope"></i> smhimran@gmail.com
                    </span>
                  </a>
                </p>
              </div>
              <div className="download-section">
                <a href="https://smhimran.herokuapp.com/resume/">
                  <span>
                    <i className="fa fa-download"> </i> Download Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
