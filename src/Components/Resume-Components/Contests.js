import React, { Component } from "react";

class Contests extends Component {
  render() {
    return (
      <div>
        <div className="table-container" style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Contest</th>
                <th>Team</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DIU Take-off Programming Contest, Spring 2018</td>
                <td>N/A</td>
                <td>
                  9<sup>th</sup>
                </td>
              </tr>
              <tr>
                <td>DIU Take-off Programming Contest, Summer 2018</td>
                <td>N/A</td>
                <td>
                  6<sup>th</sup>
                </td>
              </tr>
              <tr>
                <td>DIU Intra University Programming Contest 2019</td>
                <td>N/A</td>
                <td>
                  3<sup>rd</sup>
                </td>
              </tr>
              <tr>
                <td>ICPC Dhaka Regional 2019</td>
                <td>DIU Voids</td>
                <td>
                  60<sup>th</sup>
                </td>
              </tr>
              <tr>
                <td>MIST NCPC 2020</td>
                <td>DIU Voids</td>
                <td>
                  90<sup>th</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contests;
