import React, { Component } from "react";
import Hero from "./hero";
import ThreeUp from "./threeUp";

class Body extends Component {
  state = {};
  showUserName = () => {
    return;
  };
  render() {
    return (
      <div>
        <Hero clientWidth={this.props.clientWidth} />
        <ThreeUp clientWidth={this.props.clientWidth} />
        {`UserName: ${this.props.userDataLogged.username}`}
      </div>
    );
  }
}

export default Body;
