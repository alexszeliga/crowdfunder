// /client/App.js
import React, { Component } from "react";
// import axios from "axios";
import Nav from "./components/nav";
import Hero from "./components/body/hero";
import ThreeUp from "./components/body/threeUp";
import FormTest from "./components/formTest/formTest";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSchool,
  faQuidditch,
  faFlask
} from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, css } from "aphrodite";

library.add(faSearch);
library.add(faSchool);
library.add(faQuidditch);
library.add(faFlask);

const styles = StyleSheet.create({
  body: {
    overflowX: "hidden"
  }
});
class App extends Component {
  // initialize our state
  state = {
    clientWidth: window.innerWidth,
    loggedIn: false,
    username: "null",
    usernameSignInInput: "",
    passwordSignInInput: "",
    usernameNewUserInput: "",
    passwordNewUserInput: "",
    emailNewUserInput: "",
    locationNewUserInput: ""
  };

  updateDimension = () => {
    this.setState({ clientWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimension);
    this.getLoggedInUser();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }
  getLoggedInUser = () => {
    // axios.get("/api/get-user").then(res => {
    //   console.log(res);
    //   this.setState({ username: "alex" });
    // });
  };
  handleDummyLogIn = e => {
    e.preventDefault();
    console.log(e.target.id);
    this.setState({ username: "alex", loggedIn: true });
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleClickLogIn = e => {
    e.preventDefault();
    axios
      .post("/api/user-login", {
        username: "skipper",
        password: "password"
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
        username: this.sate.usernameNewUserInput,
        password: this.sate.passwordNewUserInput,
        email: this.sate.emailNewUserInput,
        location: this.sate.locationNewUserInput
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className={css(styles.body)}>
        <Nav clientWidth={this.state.clientWidth} />
        <Hero clientWidth={this.state.clientWidth} />
        <ThreeUp clientWidth={this.state.clientWidth} />
        <FormTest
          loggedIn={this.state.loggedIn}
          username={this.loggedIn ? "" : this.state.username}
          handleDummyLogIn={this.handleDummyLogIn}
          handleClickLogIn={this.handleClickLogIn}
          handleInputChange={this.handleInputChange}
          usernameSignInInput={this.state.usernameSignInInput}
          passwordSignInInput={this.state.passwordSignInInput}
          usernameNewUserInput={this.state.usernameNewUserInput}
          passwordNewUserInput={this.state.passwordNewUserInput}
          emailNewUserInput={this.state.emailNewUserInput}
          locationNewUserInput={this.state.locationNewUserInput}
          handleClickNewUser={this.handleClickNewUser}
        />
      </div>
    );
  }
}

export default App;
