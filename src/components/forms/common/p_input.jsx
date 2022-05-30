import React from "react";

const P_Input = (props) => {
  return (
    <div className="row">
      <div className="col-sm">
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
        <input
          type={props.type}
          className="form-control"
          id={props.name}
          style={{ width: "100px" }}
        />
      </div>
    </div>
  );
};

export default P_Input;
