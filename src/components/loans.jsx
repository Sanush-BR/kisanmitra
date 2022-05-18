import React, { Component } from "react";

class Loan extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <table className="table table-bordered">
          <thead>
            <th>#</th>
            <th>Bank Name</th>
            <th>Interest</th>
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
    );
  }
}

export default Loan;
