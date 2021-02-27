import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let url = window.location.host + "/";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/blog/">
            Imran's Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/blog/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={url}>
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
