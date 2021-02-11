import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <a href="#home" className="to-top">
          <span>
            <i className="fa fa-chevron-up"></i>
          </span>
        </a>
        <div className="container">
          <div>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/Shah.Imran46">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/imran34416">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/imran4416/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Yankee-16">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/yankee-16">
                  <i className="fa fa-codepen"></i>
                </a>
              </li>
            </ul>
          </div>
          <p style={{ marginTop: "20px" }}>
            Designed by <span style={{ color: "#36abb0" }}>•</span>
            <span id="credit">Shah Habibul Imran</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
