import React, { Component } from "react";
class Category extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div>
          <h4 style={{ fontFamily: "italic" }}>Loans For Different Fields</h4>
        </div>
        <div className="my-3">
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
      </div>
    );
  }
}

export default Category;
