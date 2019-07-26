import React, { Component } from "react";
import FormContainer from "./components/formContainer";

class App extends Component {
  render() {
    return (
      <div className="container" align="center">
        <h1 className="mt-2 mb-4">
          Control Form Component With React & Bootstrap
        </h1>
        <FormContainer />
      </div>
    );
  }
}

export default App;
