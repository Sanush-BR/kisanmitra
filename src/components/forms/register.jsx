import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
    },

    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).max(15).required().label("Password"),
    name: Joi.string().min(5).max(10).required().label("Name"),
  };

  doSubmit = () => {};

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email", "text")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name", "name")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
