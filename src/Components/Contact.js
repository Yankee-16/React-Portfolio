import React, { Component } from "react";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      subject: "",
      message: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubjectChange = (event) => {
    this.setState({
      subject: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleClick = () => {
    let name = this.state.name;
    let subject = this.state.subject;
    let body = this.state.message;

    body += `<br /><br />Regards<br />${name}`;

    window.location.href = `mailto:smhimran@gmail.com?subject=${subject}&body=${body}`;
  };

  render() {
    return (
      <div>
        <div id="contact">
          <div className="wrapper">
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name here..."
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <label htmlFor="subject">
                Subject <span style={{ color: "#36abb0" }}>*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your subject here..."
                value={this.state.subject}
                onChange={this.handleSubjectChange}
                required
              />
              <label htmlFor="message">
                Message <span style={{ color: "#36abb0" }}>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message here..."
                value={this.state.message}
                onChange={this.handleMessageChange}
                required></textarea>
              <div></div>
              <button onClick={this.handleClick}>Submit</button>
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
