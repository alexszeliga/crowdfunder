import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  hidden: {
    display: "none"
  }
});

class FormModal extends Component {
  componentDidMount() {
    axios.get("/api/all-users").then(function(response) {
      console.log(response);
    });
  }
  render() {
    return (
      <div className={css(styles.hidden)}>
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
          <button onClick={this.props.handleClickNewUser}>New User</button>
        </form>
      </div>
    );
  }
}

export default FormModal;
