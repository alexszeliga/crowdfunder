import React, { Component } from "react";
import axios from "axios";

class FormTest extends Component {
  state = {};

  handleClickNewUser = e => {
    e.preventDefault();
    axios
      .post("/api/user", {
        username: this.props.usernameNewUserInput,
        password: this.props.passwordNewUserInput,
        email: this.props.emailNewUserInput,
        location: this.props.locationNewUserInput
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    axios.get("/api/all-users").then(function(response) {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <form>
          <input
            name="usernameSignInInput"
            onChange={this.props.handleInputChange}
            value={this.props.usernameSignInInput}
          />
          <label>username</label>
          <input
            name="passwordSignInInput"
            onChange={this.props.handleInputChange}
            value={this.props.passwordSignInInput}
          />
          <label>password</label>
          <br />
          <button onClick={this.props.handleClickLogIn}>Log In</button>
        </form>
        <br />
        <form>
          <input
            name="usernameNewUserInput"
            onChange={this.props.handleInputChange}
            value={this.props.usernameNewUserInput}
          />
          <label>username</label>
          <input
            name="passwordNewUserInput"
            onChange={this.props.handleInputChange}
            value={this.props.passwordNewUserInput}
          />
          <label>password</label>
          <input
            name="emailNewUserInput"
            onChange={this.props.handleInputChange}
            value={this.props.emailNewUserInput}
          />
          <label>email</label>
          <input
            name="locationNewUserInput"
            onChange={this.props.handleInputChange}
            value={this.props.locationNewUserInput}
          />
          <label>location</label>
          <br />
          <button onClick={this.handleClickNewUser}>New User</button>
        </form>
        <form>
          <button id={1} onClick={this.props.handleDummyLogIn}>
            Dummy Log In
          </button>
        </form>
        <div>Logged in: {this.props.loggedIn ? "true" : "false"}</div>
      </div>
    );
  }
}

export default FormTest;
