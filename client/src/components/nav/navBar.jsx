import React, { Component } from "react";
import "./navBar.css";

class Nav extends Component {
  componentDidMount() {
    this.props.setNavHeight(
      document.getElementsByClassName("nav")[0].offsetHeight
    );
  }
  displayModal = choice => {
    if (choice === "login") {
      return <div className="modalbox" />;
    } else {
      return <div className="modalbox" />;
    }
  };
  signInOrLogOutButton = () => {
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

  helpMeOrMyProfileButton = () => {
    let bool = this.props.loggedIn;
    if (bool) {
      return (
        <li
          onClick={() => {
            this.props.navigateTo("/user-home");
          }}
          className="navMenuItem"
          id="getStarted"
        >
          <span className="navbtn">{this.props.userDataLogged.username}</span>
        </li>
      );
    } else {
      return (
        <li
          onClick={this.props.getStartedModal}
          className="navMenuItem"
          id="getStarted"
        >
          <span className="navbtn">Help Me</span>
        </li>
      );
    }
  };
  render() {
    return (
      <div className="navWrap clearfix">
        <nav className="nav clearfix">
          <div className="searchInputWrapper">
            <input className="searchInput" />
          </div>
          <div
            className="logo"
            onClick={() => {
              this.props.navigateTo("/");
            }}
          >
            crowdfunder
          </div>
          <div className="menuWrap">
            <ul className="menu">
              {this.helpMeOrMyProfileButton()}
              {this.signInOrLogOutButton()}
              <li className="navMenuItem lastNavMenuItem">
                <span
                  className="navbtn"
                  onClick={
                    this.props.loggedIn
                      ? () => {
                          this.props.navigateTo("/new-post");
                        }
                      : this.props.getStartedModal
                  }
                >
                  New Campaign
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <div className="clearfix breaker" />
        <div className={`modalFocus ${this.props.modal ? "show" : "hidden"}`}>
          <div className="modalBox">
            <div className="modalClose" onClick={this.props.handleModalClose} />
            <div
              className={`formSignIn ${
                this.props.chooseModal ? "show" : "hidden"
              }`}
            >
              <div
                className="modal-button"
                onClick={() => {
                  this.props.handleModalChoice("register");
                }}
              >
                Register
              </div>
              <div
                className="modal-button"
                onClick={() => {
                  this.props.handleModalChoice("login");
                }}
              >
                Log In
              </div>
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
            <span />
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
