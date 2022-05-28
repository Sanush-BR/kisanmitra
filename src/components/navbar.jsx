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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">
            <i>
              <h5>
                <b>Kisan mitra</b>
              </h5>
            </i>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schemes">
                  Schemes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/loans">
                  Loans
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/types">
                  Types
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/farmers">
                  Farmers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/predict">
                  Recommendor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
