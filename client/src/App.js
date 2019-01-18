// /client/App.js
import React, { Component } from "react";

// import axios from "axios";
import Nav from "./components/nav/navBar";
import Body from "./components/body/body";

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

// TODO: does this need to be here?
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
    userData: [],
    userDataLogged: [],
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
    axios.get("/api/get-user").then(res => {
      console.log(res.data);
      if (res.data) {
        this.setState({ userDataLogged: res.data });
      } else {
        // TODO: Handle failed login
        // NOTE: This gets called on app load to see if the user is logged in via express session;
        console.log("Shits fucked up");
      }
    });
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleClickLogIn = e => {
    e.preventDefault();

    // input validate
    if (this.state.usernameSignInInput === "") {
      console.log("input validation");
      return;
    }
    axios
      .post("/api/user-login", {
        username: this.state.usernameSignInInput,
        password: this.state.passwordSignInInput
      })
      .then(res => {
        console.log(res.data);
        this.getLoggedInUser();
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleClickNewUser = e => {
    e.preventDefault();
    console.log("Hello!");
    axios
      .post("/api/user", {
        username: this.state.usernameNewUserInput,
        password: this.state.passwordNewUserInput,
        email: this.state.emailNewUserInput,
        location: this.state.locationNewUserInput
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogOut = e => {
    e.preventDefault();
    console.log("handleLogOut");
    axios
      .get("/logout")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className={css(styles.body)}>
        <Nav
          username={this.state.userDataLogged.username}
          clientWidth={this.state.clientWidth}
          handleLogOut={this.state.handleLogOut}
          loggedIn={this.state.loggedIn}
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
        <Body clientWidth={this.state.clientWidth} />
      </div>
    );
  }
}

export default App;
