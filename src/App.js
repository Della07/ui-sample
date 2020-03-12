import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "../src/style.css";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <div className="">
        <HomePage />
      </div>
    );
  }
}

export default App;
