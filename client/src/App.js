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

// TODO: does this need to be here?
library.add(faSearch);
library.add(faSchool);
library.add(faQuidditch);
library.add(faFlask);

class App extends Component {
  // initialize our state
  state = {
    clientWidth: window.innerWidth,
    loggedIn: false,
    userDataLogged: [],
    usernameSignInInput: "",
    passwordSignInInput: "",
    usernameNewUserInput: "",
    passwordNewUserInput: "",
    emailNewUserInput: "",
    locationNewUserInput: "",
    modal: false,
    chooseModal: false,
    loginModal: false,
    registerModal: false,
    bodyRoute: "/",
    userPosts: [],
    allPosts: []
  };

  checkAuth = () => {
    let loggedIn = this.state.loggedIn;
    if (loggedIn) {
      // TODO: hit backend with username/userid and confirm they are real user and it === req.user.id
      return true;
    } else {
      // any action that requires auth but doesn't get it should make the login window pop up
      this.getStartedModal();
      return false;
    }
  };

  updateDimension = () => {
    this.setState({ clientWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimension);
    this.getLoggedInUser();
    this.getAllPosts();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }

  navigateTo = route => {
    this.setState({ bodyRoute: route });
  };
  getLoggedInUser = () => {
    axios.get("/api/get-user").then(res => {
      if (res.data) {
        console.log(res.data);
        this.setState({
          userDataLogged: res.data,
          loggedIn: true,
          userPosts: res.data.posts
        });
      } else {
        // TODO: Handle failed login
        // NOTE: This gets called on app load to see if the user is logged in via express session;
        console.log("No logged in user found");
      }
    });
  };
  getAllPosts = () => {
    axios.get("/api/all-posts").then(res => {
      console.log(res.data);
      this.setState({ allPosts: res.data });
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
        // console.log(res.data);
        this.handleModalClose();
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
        this.handleModalClose();
        console.log("alex");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogOut = () => {
    console.log("handleLogOut");
    axios
      .get("/logout")
      .then(response => {
        console.log(response);
        this.setState({ loggedIn: false, userDataLogged: [], bodyRoute: "/" });
        window.location = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getStartedModal = () => {
    this.setState({
      chooseModal: true,
      modal: true,
      loginModal: false,
      registerModal: false
    });
  };
  handleModalChoice = choice => {
    this.setState({ chooseModal: false });
    switch (choice) {
      case "login":
        let currentLogin = this.state.loginModal;
        this.setState({ loginModal: !currentLogin });
        break;
      case "register":
        console.log("register");
        let currentReg = this.state.registerModal;
        this.setState({ registerModal: !currentReg });
        break;
      default:
        break;
    }
  };
  handleModalClose = () => {
    this.setState({
      modal: false,
      chooseModal: false,
      loginModal: false,
      registerModal: false,
      usernameSignInInput: "",
      passwordSignInInput: "",
      usernameNewUserInput: "",
      passwordNewUserInput: "",
      emailNewUserInput: "",
      locationNewUserInput: "",
      newPostPostTitle: "",
      newPostPostTags: ""
    });
  };
  newPostSubmitPost = e => {
    e.preventDefault();
    axios
      .post("/api/new", {
        title: this.state.newPostPostTitle,
        tags: this.state.newPostPostTags,
        user: this.state.userDataLogged._id
      })
      .then(response => {
        this.setState({
          newPostPostTitle: "",
          newPostPostTags: "",
          bodyRoute: "/user-home"
        });
        //body route to user page
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getPosts = userId => {
    if (!userId) {
      console.log("Requested posts with no args");
    } else {
      console.log(`Requested posts for ${userId}`);
    }
  };
  render() {
    return (
      <div>
        <Nav
          clientWidth={this.state.clientWidth}
          handleLogOut={this.handleLogOut}
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
          modal={this.state.modal}
          chooseModal={this.state.chooseModal}
          getStartedModal={this.getStartedModal}
          handleModalChoice={this.handleModalChoice}
          loginModal={this.state.loginModal}
          registerModal={this.state.registerModal}
          handleModalClose={this.handleModalClose}
          navigateTo={this.navigateTo}
          checkAuth={this.checkAuth}
        />

        <Body
          allPosts={this.state.allPosts}
          handleInputChange={this.handleInputChange}
          clientWidth={this.state.clientWidth}
          getStartedModal={this.getStartedModal}
          userDataLogged={this.state.userDataLogged}
          userPosts={this.state.userPosts}
          bodyRoute={this.state.bodyRoute}
          loggedIn={this.state.loggedIn}
          newPostPostTitle={this.state.newPostPostTitle}
          newPostPostTags={this.state.newPostPostTags}
          newPostSubmitPost={this.newPostSubmitPost}
          getPosts={this.getPosts}
        />
      </div>
    );
  }
}

export default App;
