import React from "react";
import "./style.css";

export default function Navbar() {
  const onclick = () => {
    console.log("Navbar Toggle!");
  };

  let url = window.location.host;

  url += "/blog/";
  return (
    <div>
      <nav id="nav-wrap">
        <div className="menu-button">
          <a href onClick={onclick} id="#menu">
            <i className="fa fa-bars fa-2x"></i>
          </a>
        </div>
        <ul id="nav" className="nav">
          <li id="home-link" className="current">
            <a href="#home">Home</a>
          </li>
          <li id="about-link">
            <a href="#about">About</a>
          </li>
          <li id="resume-link">
            <a href="#resume">Resume</a>
          </li>
          <li id="projects-link">
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href={url}>Blog</a>
          </li>
          <li id="contact-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
