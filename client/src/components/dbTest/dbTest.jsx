import React, { Component } from "react";
import axios from "axios";

class DbTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
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
    this.handleInputChange = e => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    };
  }
  componentDidMount() {
    axios.get("/api/all-users").then(function(response) {
      console.log(response);
    });
  }
  render() {
    return (
      <form>
        <input
          name="usernameInput"
          onChange={this.handleInputChange}
          value={this.state.usernameInput}
        />
        <label>username {this.state.usernameInput}</label>
        <input
          name="passwordInput"
          onChange={this.handleInputChange}
          value={this.state.passwordInput}
        />
        <label>password {this.state.passwordInput}</label>
        <button onClick={this.handleClickLogIn}>Log In</button>
        <button onClick={this.handleClickNewUser}>New User</button>
      </form>
    );
  }
}

export default DbTest;
