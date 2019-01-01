import React, { Component } from "react";
import axios from "axios";

class DbTest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = e => {
      e.preventDefault();
      axios
        // .post("/api/user", { username: "hashalex22", password: "password" })
        .post("/api/user-login", {
          username: "hashalex22",
          password: "password"
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
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
