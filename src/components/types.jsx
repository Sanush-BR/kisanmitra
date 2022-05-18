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
              <th scope="row">1</th>
              <td>Dairy Loan</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Farm tractor</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Category;
