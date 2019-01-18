import React, { Component } from "react";
import Hero from "./hero";
import ThreeUp from "./threeUp";

class Body extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero clientWidth={this.props.clientWidth} />
        <ThreeUp clientWidth={this.props.clientWidth} />
      </div>
    );
  }
}

export default Body;
