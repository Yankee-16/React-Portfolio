import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="wrapper">
            <form>
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name here..."
              />
              <label for="subject">
                Subject <span style={{ color: "#36abb0" }}>*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your subject here..."
                required
              />
              <label for="message">
                Message <span style={{ color: "#36abb0" }}>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message here..."
                required></textarea>
              <div></div>
              <button onclick="sendmail()">Submit</button>
            </form>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
