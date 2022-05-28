import React, { Component } from "react";

class Predict extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "550px" }}>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <label htmlFor="nitrogen" className="form-label">
                Nitrogen
              </label>
              <input
                type="text"
                className="form-control"
                id="nitrogen"
                // aria-describedby="emailHelp"
                style={{ width: "100px" }}
              />
            </div>
            <div className="mx-5 col-1">
              <label htmlFor="phosphorus" className="form-label">
                Phosphorous
              </label>
              <input
                type="text"
                className="form-control"
                id="phosphorus"
                // aria-describedby="emailHelp"
                style={{ width: "100px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label htmlFor="pottassium" className="form-label">
                Pottassium
              </label>
              <input
                type="text"
                className="form-control"
                id="pottassium"
                // aria-describedby="emailHelp"
                style={{ width: "100px" }}
              />
            </div>
            <div className="mx-5 col-1">
              <label htmlFor="temperature" className="form-label">
                Temperature
              </label>
              <input
                type="text"
                className="form-control"
                id="temperature"
                // aria-describedby="emailHelp"
                style={{ width: "100px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label htmlFor="humidity" className="form-label">
                Humidity
              </label>
              <input
                type="text"
                className="form-control"
                id="humidity"
                // aria-describedby="emailHelp"
                style={{ width: "100px" }}
              />
            </div>
            <div className="mx-5 col-1">
              <label htmlFor="ph" className="form-label">
                Ph
              </label>
              <input
                type="text"
                className="form-control"
                id="ph"
                // aria-describedby="emailHelp"
                style={{ width: "100px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label htmlFor="rainfall" className="form-label">
                Rainfall
              </label>
              <input
                type="text"
                className="form-control"
                id="rainfall"
                // aria-describedby="emailHelp"
                style={{ width: "100px" }}
              />
            </div>
            <div className="mx-5 col-1" style={{ marginTop: "20px" }}>
              <span></span>
              <button
                className="btn btn-primary "
                style={{ width: "100px", marginTop: "10px" }}
              >
                PREDICT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Predict;
