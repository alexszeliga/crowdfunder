// /client/App.js
import React, { Component } from "react";
import Body from "./components/body/body";
import Modal from "./components/utility/modal";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  // initialize our state
  state = {
    clientWidth: document.body.clientWidth,
    loggedIn: false,
    modalFlag: true,
    modalRoute: ""
  };

  // TODO: Auth Check Method
  checkAuth = () => {};

  updateDimension = () => {
    this.setState({ clientWidth: document.body.clientWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ clientWidth: document.body.clientWidth });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }

  getLoggedInUser = () => {
    // this route checks for req.user
    axios.get("/api/get-user").then(res => {
      if (res.data) {
        this.setState({
          loggedIn: true
        });
      } else {
        //
        console.log("No logged in user found");
      }
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleLogIn = e => {
    e.preventDefault();
    // TODO: Login Route
  };
  handleNewUser = e => {
    e.preventDefault();
    // TODO: New User Route
  };
  setNavHeight = height => {
    this.setState({ navHeight: height });
  };
  handleLogOut = () => {
    axios
      .get("/logout")
      .then(response => {
        // console.log(response);
        this.setState({ loggedIn: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  toggleModal = () => {
    this.setState(prevState => ({ modalFlag: !prevState.modalFlag }));
  };
  render() {
    let { modalFlag } = this.state;
    let { toggleModal } = this;
    return (
      <div>
        {modalFlag ? <Modal toggleModal={toggleModal} /> : ""}
        <Body />
      </div>
    );
  }
}

export default App;
