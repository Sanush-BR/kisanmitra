import React, { Component } from "react";
import pic1 from "../pictures/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg";
import pic2 from "../pictures/presentsquare-FIBmUBCilEw-unsplash.jpg";
import pic3 from "../pictures/wheat-2391348_1920.jpg";

class Slider extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={pic1}
                alt="First slide"
                width="600px"
                height="623px"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={pic2}
                alt="Second slide"
                width="600px"
                height="623px"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={pic3}
                alt="Third slide"
                width="600px"
                height="623px"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Slider;
