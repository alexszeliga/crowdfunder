import React, { Component } from "react";

class DbTest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = e => {
      e.preventDefault();
    };
  }
  render() {
    return (
      <form>
        <input />
        <label>username</label>
        <input />
        <label>password</label>
        <button onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

export default DbTest;
