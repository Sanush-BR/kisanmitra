import React, { Component } from "react";
import Joi from "joi-browser";
import P_Input from "./p_input";

class Pform extends Component {
  state = {
    data: {
      nitrogen: "",
      phosphorus: "",
      pottassium: "",
      temperature: "",
      humidity: "",
      ph: "",
      rainfal: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }

  renderInput(name, label, type = "number") {
    const { data } = this.state;

    return (
      <P_Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        // error={errors[name]}
      />
    );
  }
}

export default Pform;
