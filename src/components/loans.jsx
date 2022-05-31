import React, { Component } from "react";
import { loans } from "./services/recordService";

class Loan extends Component {
  state = { data: [] };

  async componentDidMount() {
    try {
      const { data } = await loans();
      this.setState({ data });
    } catch (ex) {
      console.log(ex);
    }
  }

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
              {this.state.data.map((m) => (
                <tr key={m._id}>
                  <th>{this.state.data.indexOf(m) + 1}</th>
                  <td>{m.provider}</td>
                  <td>{m.interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Loan;
