import React, { Component } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

class Footer extends Component {
  mystyles = {
    marginLeft: "680px",
    marginRight: "auto",
  };

  mystyles1 = {
    marginRight: "5px",
    marginLeft: "800px",
    color: "white",
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="container-fluid bg-secondary footer fixed-bottom"
          style={{ width: "1533px", height: "72px" }}
        >
          <div className="row">
            <div className="col-1 my-3">
              <button className="btn btn-link sm">
                <Link to="/schemes" style={{ color: "white" }}>
                  SCHEMES
                </Link>
              </button>
            </div>
            <div className="col-1 my-3">
              <button className="btn btn-link sm">
                <Link to="/loans" style={{ color: "white" }}>
                  LOANS
                </Link>
              </button>
            </div>
            <div className="col-1 my-3">
              <button className="btn btn-link sm">
                <Link to="/types" style={{ color: "white" }}>
                  TYPES
                </Link>
              </button>
            </div>
            <div className="col-1 my-3">
              <button className="btn btn-link sm">
                <Link to="/farmers" style={{ color: "white" }}>
                  FARMERS
                </Link>
              </button>
            </div>

            <div style={this.mystyles1}>
              <h5 className="m-1">FOLLOW US ON</h5>
              <div className="row" style={{ marginLeft: "2px" }}>
                <div className="col-3">
                  <FaInstagramSquare size="2em" />
                </div>
                <div className="col-3">
                  <FaTwitterSquare size="2em" />
                </div>
                <div className="col-3">
                  <FaFacebookSquare size="2em" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Footer;
