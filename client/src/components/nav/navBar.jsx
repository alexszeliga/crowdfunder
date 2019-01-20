import React, { Component } from "react";
import "./navBar.css";

class Nav extends Component {
  displayModal = choice => {
    if (choice === "login") {
      return <div className="modalbox" />;
    } else {
      return <div className="modalbox" />;
    }
  };
  signInOrLogOutButton = () => {
    console.log(this.props.loggedIn);
    let bool = this.props.loggedIn;
    if (bool) {
      return (
        <li
          onClick={this.props.handleLogOut}
          className="navMenuItem"
          id="getStarted"
        >
          <span className="navbtn">Log Out</span>
        </li>
      );
    } else {
      return (
        <li
          onClick={this.props.getStartedModal}
          className="navMenuItem"
          id="getStarted"
        >
          <span className="navbtn">Sign In</span>
        </li>
      );
    }
  };
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="searchInputWrapper">
            <input className="searchInput" />
          </div>
          <div className="logo" onClick={this.props.handleLogOut}>
            crowdfunder
          </div>
          <div className="menuWrap">
            <ul className="menu">
              <li className="navMenuItem">
                <span className="navbtn">Help Me</span>
              </li>
              {/* <li
                onClick={this.props.getStartedModal}
                className="navMenuItem"
                id="getStarted"
              >
                <span className="navbtn">Sign In</span>
              </li> */}
              {this.signInOrLogOutButton()}
              <li className="navMenuItem lastNavMenuItem">
                <span
                  className="navbtn"
                  onClick={() => {
                    this.props.navigateTo("/new-post");
                  }}
                >
                  New Campaign
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <div className={`modalFocus ${this.props.modal ? "" : "hidden"}`}>
          <div className="modalBox">
            <div className="modalClose" onClick={this.props.handleModalClose} />
            <div
              className={`formSignIn ${this.props.chooseModal ? "" : "hidden"}`}
            >
              <button
                onClick={() => {
                  this.props.handleModalChoice("register");
                }}
              >
                Register
              </button>
              <button
                onClick={() => {
                  this.props.handleModalChoice("login");
                }}
              >
                Log In
              </button>
            </div>
            <div
              className={`formSignUp ${
                this.props.registerModal ? "" : "hidden"
              }`}
            >
              <label style={{ display: "block" }}>username</label>
              <input
                style={{ display: "block" }}
                name="usernameNewUserInput"
                onChange={this.props.handleInputChange}
                value={this.props.usernameNewUserInput}
              />
              <label style={{ display: "block" }}>password</label>
              <input
                style={{ display: "block" }}
                name="passwordNewUserInput"
                onChange={this.props.handleInputChange}
                value={this.props.passwordNewUserInput}
              />
              <label style={{ display: "block" }}>email</label>
              <input
                style={{ display: "block" }}
                name="emailNewUserInput"
                onChange={this.props.handleInputChange}
                value={this.props.emailNewUserInput}
              />
              <label style={{ display: "block" }}>location</label>
              <input
                style={{ display: "block" }}
                name="locationNewUserInput"
                onChange={this.props.handleInputChange}
                value={this.props.locationNewUserInput}
              />

              <button
                className="button-style"
                style={{ display: "block" }}
                onClick={this.props.handleClickNewUser}
              >
                New User
              </button>
            </div>
            <div
              className={`formSignIn ${this.props.loginModal ? "" : "hidden"}`}
            >
              <label style={{ display: "block" }}>username</label>
              <input
                style={{ display: "block" }}
                name="usernameSignInInput"
                onChange={this.props.handleInputChange}
                value={this.props.usernameSignInInput}
              />
              <label style={{ display: "block" }}>password</label>
              <input
                style={{ display: "block" }}
                name="passwordSignInInput"
                onChange={this.props.handleInputChange}
                value={this.props.passwordSignInInput}
              />

              <button
                className="button-style"
                style={{ display: "block" }}
                onClick={this.props.handleClickLogIn}
              >
                Log In
              </button>
            </div>
            <span className />
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
