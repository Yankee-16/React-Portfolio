import React, { Component } from "react";
import SingleExpertise from "./SingleExpertise";
import axios from "axios";

class SkillList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expertises: [],
    };
  }

  componentDidMount() {
    axios.defaults.withCredentials = true;
    axios
      .get(`http://localhost:8000/api/expertises/`)
      .then((res) => {
        const expertises = res.data;
        this.setState({ expertises });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="bars">
          <ul className="skills">
            {this.state.expertises.map((expertise, index) => {
              return (
                <li key={index}>
                  <SingleExpertise expertise={expertise} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillList;
