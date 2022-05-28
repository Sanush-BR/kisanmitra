import React, { Component } from "react";

class Farmer extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Crop</th>
              <th>Place</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sanjay</td>
              <td>Rice</td>
              <td>Tumkuru</td>
              <td>sanju@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Rakesh</td>
              <td>wheat</td>
              <td>Hassan</td>
              <td>rakesh@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Vivek</td>
              <td>maize</td>
              <td>Mysore</td>
              <td>vivek@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Farmer;
