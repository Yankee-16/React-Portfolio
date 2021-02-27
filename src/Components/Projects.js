import React, { Component } from "react";
import SingleProject from "./Resume-Components/SingleProject";
import axios from "axios";

export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios.defaults.withCredentials = true;
    axios
      .get(`/api/projects/`)
      .then((res) => {
        const projects = res.data;
        this.setState({ projects });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div id="projects">
          <h1>These are a few projects I've worked on so far.</h1>
          <div className="wrapper">
            {this.state.projects.map((project) => {
              return <SingleProject project={project} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
