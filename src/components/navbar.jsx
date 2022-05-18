import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./forms/login";

class Navbar extends Component {
  styles = {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-light bg-secondary">
            <span className="navbar-brand mb-0 h1  " style={this.styles}>
              Kisan mitra
            </span>

            <div style={{ marginLeft: "900px" }}>
              <button className="btn btn-secondary sm">
                <Link to="/" style={{ color: "white" }}>
                  HOME
                </Link>
              </button>
              <button
                className="btn btn-secondary sm"
                style={{ color: "white" }}
              >
                <Link to="/" style={{ color: "white" }}>
                  RECOMMENDER
                </Link>
              </button>
            </div>
            <ul
              style={{
                marginRight: "170px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-white dropdown-toggle btn-sm"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
