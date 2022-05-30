import React, { Component } from "react";

class Farmer extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div>
          <h4 style={{ fontFamily: "italic" }}>List of Successful Farmers</h4>
        </div>
        <div className="my-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col-sm">Name</th>
                <th scope="col-sm">Crop</th>
                <th scope="col-sm">Place</th>
                <th scope="col-sm">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Sanjay</td>
                <td>Rice</td>
                <td>Tumkuru</td>
                <td>sanju@gmail.com</td>
              </tr>
              <tr>
                <td scope="row">Rakesh</td>
                <td>wheat</td>
                <td>Hassan</td>
                <td>rakesh@gmail.com</td>
              </tr>
              <tr>
                <td scope="row">Vivek</td>
                <td>maize</td>
                <td>Mysore</td>
                <td>vivek@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Farmer;
