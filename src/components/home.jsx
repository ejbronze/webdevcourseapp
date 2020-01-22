import React, { Component } from "react";
import Navibar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import Features from "./features";

class Home extends Component {
  render() {
    return (
      <div>
        {" "}
        <Navibar />
        <Header />
        <Features />
        <Footer />
      </div>
    );
  }
}

export default Home;
