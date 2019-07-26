import React, { Component } from "react";

class FormContainer extends Component {
  state = {
    formControls: {
      email: {
        value: ""
      },
      name: {
        value: ""
      },
      password: {
        value: ""
      },
      confirmPassword: {
        value: ""
      }
    }
  };
  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
  };
  render() {
    return (
      <form>
        <div className="form-group w-50">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.formControls.email.value}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group w-50">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.formControls.name.value}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group w-50">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.formControls.password.value}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control w-50"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={this.state.formControls.confirmPassword.value}
            onChange={this.changeHandler}
          />
        </div>
        <input
          className="btn btn-success btn-md form-control w-50"
          type="submit"
          value="submit"
        />
      </form>
    );
  }
}

export default FormContainer;
