import React, { Component } from "react";
import Banner from "./Banner";
import Header from "./Header";
import About from "./About";
import Advisory from "./Advisory";
import Client from "./Client";
import Feedback from "./Feedback";
import Footer from "./Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <About />
        <Advisory />
        <Client />
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
