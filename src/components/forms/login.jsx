import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "450px" }}>
        <div className="container">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ width: "500px" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                style={{ width: "500px" }}
              />
            </div>

            <button className="mb-3 btn btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
