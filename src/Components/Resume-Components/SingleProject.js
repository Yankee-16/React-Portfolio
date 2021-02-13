import React from "react";

export default function SingleProject({ project }) {
  return (
    <div className="single-project">
      <div className="project-img">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.banner} alt="Hacksprint" height="215px" />

          <div className="project-overlay">
            <div className="project-banner">
              <h3>{project.title}</h3>
            </div>

            <div className="project-icon">
              <i className="fa fa-external-link fa-3x"> </i>
            </div>
          </div>
        </a>
      </div>

      <div className="project-title">
        <a href={project.url}>
          <h3>{project.title}</h3>
        </a>
      </div>
    </div>
  );
}
