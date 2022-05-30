import React, { Component } from "react";

class Loan extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div>
          <h4 style={{ fontFamily: "italic" }}>Latest Loan Schemes</h4>
        </div>
        <div className="my-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Bank Name</th>
                <th>Interest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Canara Bank</td>
                <td>12.5% per annum</td>
              </tr>
              <tr>
                <td>2</td>
                <td>State Bank Of India</td>
                <td>12.5% per annum</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Loan;
