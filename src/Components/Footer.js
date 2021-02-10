import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <a href="#home" class="to-top">
          <span>
            <i class="fa fa-chevron-up"></i>
          </span>
        </a>
        <div class="container">
          <div>
            <ul class="social">
              <li>
                <a href="https://www.facebook.com/Shah.Imran46">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/imran34416">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/imran4416/">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Yankee-16">
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/yankee-16">
                  <i class="fa fa-codepen"></i>
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
