import React from "react";

export default function Header() {
  return (
    <div>
      <header id="home" style={{ height: "808px" }}>
        <div className="header-text">
          <h1>Hi! I'm Shah Habibul Imran.</h1>
          <p>
            A student of Computer Science and Engineering at Daffodil
            International University. I am also a Competitive Programmer and an
            apprentice in Web Development. Let's
            <span className="header-link">
              <a href="#about"> scroll down</a>
            </span>
            &nbsp;and learn
            <span className="header-link">
              <a href="#about"> about me</a>
            </span>
            .
          </p>
          <hr />
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
        <div className="scrolldown">
          <div style={{ position: "relative", left: "-50%" }}>
            <a href="#about">
              <i className="fa fa-chevron-circle-down"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
