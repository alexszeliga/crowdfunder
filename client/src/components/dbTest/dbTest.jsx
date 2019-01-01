import React, { Component } from "react";
import axios from "axios";

class DbTest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClickLogIn = e => {
      e.preventDefault();
      axios
        .post("/api/user-login", {
          username: "hashalexRealTest",
          password: "password"
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    this.handleClickNewUser = e => {
      e.preventDefault();
      axios
        .post("/api/user", {
          username: "hashalexRealTest",
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
        <button onClick={this.handleClickLogIn}>Log In</button>
        <button onClick={this.handleClickNewUser}>New User</button>
      </form>
    );
  }
}

export default DbTest;
