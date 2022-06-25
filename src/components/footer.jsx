import React, { Component } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

class Footer extends Component {
  mystyles1 = {
    marginRight: "5px",
    marginLeft: "800px",
    color: "white",
  };

  render() {
    return (
      <React.Fragment>
        <footer
          className="footer bg-secondary fixed-bottom"
          style={{ height: "74px" }}
        >
          {/* <div className="container">
            <span className="text-dark">Jai Jawan Jai Kisan</span>
          </div> */}
          
          <div style={{marginTop:"20px"}}>
            <FaFacebookSquare size="2rem" />
            <FaTwitterSquare size="2rem" style={{ marginLeft: "10px" }} />
            <FaInstagramSquare size="2rem" style={{ marginLeft: "10px" }} />
            <FaYoutubeSquare size="2rem" style={{ marginLeft: "10px" }} />
          </div>
          
          
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
