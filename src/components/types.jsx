import React, { Component } from "react";
class Category extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dairy Loan</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Farm tractor</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Micro irrigation system</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Category;
