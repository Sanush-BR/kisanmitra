import React, { Component } from "react";

class Schemes extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div>
          <h4 style={{ fontFamily: "italic" }}>Latest Government Schemes</h4>
        </div>
        <div className="my-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Scheme Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <a href="https://pmfby.gov.in/" target="_blank">
                    Pradhan mantri bima fisal yojana(PMBFY)
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <a href="">CM mukyamantri raita vidya nidhi</a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <a href="">Kisan credit card</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Schemes;
