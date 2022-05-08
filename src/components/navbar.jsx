import React, { Component } from "react";

class Navbar extends Component {
  styles = {
    fontWeight: "bold",
    fontStyle: "italic",
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-secondary">
          <span className="navbar-brand mb-0 h1  " style={this.styles}>
            Kisan mitra
          </span>
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
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
