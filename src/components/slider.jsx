import React, { Component } from "react";
import { Carousel } from "bootstrap";
import pic1 from "../pictures/irewolede-PvwdlXqo85k-unsplash.jpg";
import pic2 from "../pictures/randy-fath-dDc0vuVH_LU-unsplash.jpg";
import pic3 from "../pictures/steven-weeks-DUPFowqI6oI-unsplash.jpg";

class Slider extends Component {
  state = {
    img1: "https://picsum.photos/250",
    img2: "https://picsum.photos/261",
    img3: "https://picsum.photos/261",
  };

  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              Name
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={pic3}
                alt="First slide"
                width="600px"
                height="600px"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={pic1}
                alt="Second slide"
                width="600px"
                height="600px"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={pic2}
                alt="Third slide"
                width="600px"
                height="600px"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
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
            href="#carouselExampleIndicators"
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
