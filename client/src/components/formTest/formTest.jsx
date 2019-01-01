import React, { Component } from "react";
import axios from "axios";

class FormTest extends Component {
  state = {
    usernameSignInInput: "",
    passwordSignInInput: "",
    usernameNewUserInput: "",
    passwordNewUserInput: "",
    emailNewUserInput: "",
    locationNewUserInput: ""
  };
  handleClickLogIn = e => {
    e.preventDefault();
    axios
      .post("/api/user-login", {
        username: this.state.usernameSignInInput,
        password: this.state.passwordSignInInput
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  handleClickNewUser = e => {
    e.preventDefault();
    axios
      .post("/api/user", {
        username: this.state.usernameNewUserInput,
        password: this.state.passwordNewUserInput,
        email: this.state.emailNewUserInput,
        location: this.state.locationNewUserInput
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
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
            onChange={this.handleInputChange}
            value={this.state.usernameSignInInput}
          />
          <label>username</label>
          <input
            name="passwordSignInInput"
            onChange={this.handleInputChange}
            value={this.state.passwordSignInInput}
          />
          <label>password</label>
          <br />
          <button onClick={this.handleClickLogIn}>Log In</button>
        </form>
        <br />
        <form>
          <input
            name="usernameNewUserInput"
            onChange={this.handleInputChange}
            value={this.state.usernameNewUserInput}
          />
          <label>username</label>
          <input
            name="passwordNewUserInput"
            onChange={this.handleInputChange}
            value={this.state.passwordNewUserInput}
          />
          <label>password</label>
          <input
            name="emailNewUserInput"
            onChange={this.handleInputChange}
            value={this.state.emailNewUserInput}
          />
          <label>email</label>
          <input
            name="locationNewUserInput"
            onChange={this.handleInputChange}
            value={this.state.locationNewUserInput}
          />
          <label>location</label>
          <br />
          <button onClick={this.handleClickNewUser}>New User</button>
        </form>
      </div>
    );
  }
}

export default FormTest;
