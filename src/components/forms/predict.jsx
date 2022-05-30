import React, { Component } from "react";
import Joi from "joi-browser";

class Predict extends Component {
  state = {
    data: {
      nitrogen: "",
      phosphorous: "",
      pottassium: "",
      temperature: "",
      humidity: "",
      ph: "",
      rainfall: "",
    },
  };

  render() {
    return (
      <div style={{ marginTop: "80px", marginLeft: "30px" }}>
        <div className="container">
          <div>
            <h4 style={{ fontFamily: "italic" }}>
              Predict The Best Crop Suitable To Your Area
            </h4>
          </div>
          <div className="my-4">
            <div className="row">
              <div className="col-sm">
                <label htmlFor="nitrogen" className="form-label">
                  Nitrogen
                </label>
                <input
                  type="text"
                  name="nitrogen"
                  className="form-control"
                  id="nitrogen"
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-sm">
                <label htmlFor="phosphorus" className="form-label">
                  Phosphorous
                </label>
                <input
                  type="text"
                  name="phosphorus"
                  className="form-control"
                  id="phosphorus"
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-sm">
                <label htmlFor="pottassium" className="form-label">
                  Pottassium
                </label>
                <input
                  type="text"
                  name="pottassium"
                  className="form-control"
                  id="pottassium"
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-sm">
                <label htmlFor="temperature" className="form-label">
                  Temperature
                </label>
                <input
                  type="text"
                  name="temperature"
                  className="form-control"
                  id="temperature"
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-sm">
                <label htmlFor="humidity" className="form-label">
                  Humidity
                </label>
                <input
                  type="text"
                  name="humidity"
                  className="form-control"
                  id="humidity"
                  style={{ width: "100px" }}
                />
              </div>
              <div className=" col-sm">
                <label htmlFor="ph" className="form-label">
                  Ph
                </label>
                <input
                  type="text"
                  name="ph"
                  className="form-control"
                  id="ph"
                  style={{ width: "100px" }}
                />
              </div>

              <div className="col-sm">
                <label htmlFor="rainfal" className="form-label">
                  Rainfal
                </label>
                <input
                  type="text"
                  name="rainfal"
                  className="form-control"
                  id="rainfal"
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-sm" style={{ marginTop: "20px" }}>
                <span></span>
                <button
                  className="btn btn-primary "
                  style={{ width: "100px", marginTop: "10px" }}
                >
                  PREDICT
                </button>
              </div>
            </div>

            <div className="row my-5">
              <div className="col">
                <h5 style={{ fontFamily: "italic" }}>
                  RESULTANT CROP:
                  <span
                    style={{ textTransform: "uppercase", fontFamily: "italic" }}
                  >
                    Rice
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Predict;
