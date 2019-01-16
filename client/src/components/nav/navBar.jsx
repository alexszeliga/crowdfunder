import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import FormModal from "./formModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SVG from "../menuBar";
// import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
let styles = StyleSheet.create({
  nav: {
    position: "absolute",
    width: "100vw",
    color: "rgb(166, 215, 221, 1)",
    fontFamily: "'Raleway', sans-serif;",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 20px 0px rgba(178, 178, 178, 0.47)",
    zIndex: "2",
    backgroundColor: "white",
    "@media (min-width: 768px)": {
      backgroundColor: "transparent",
      color: "rgb(166, 215, 221, .5)"
    }
  },
  menuWrap: {
    flex: 1,
    textAlign: "right"
  },
  menu: {
    textAlign: "center",
    listStyleType: "none",
    margin: "0",
    padding: "0",
    height: "100%",
    color: "black"
  },
  navMenuItem: {
    display: "inline-block",
    width: "33%",
    borderRight: "1px solid black"
  },
  lastNavMenuItem: {
    borderRight: "none"
  },
  logo: {
    fontFamily: "'Patua One', cursive;",
    fontSize: "2.5rem",
    letterSpacing: "-.8px",
    flex: 1,
    textAlign: "center"
  },
  searchButton: {
    flex: 1,
    marginLeft: ".5em"
  },
  faBlock: {
    display: "block",
    color: "black"
  },
  searchInputWrapper: {
    flex: 1
  },
  searchInput: {
    display: "block",
    marginLeft: "9px",
    border: "0px solid black",
    padding: "5px",
    backgroundColor: "rgba(255,255,255,0.5)",
    outline: "none"
  }
});
class Nav extends Component {
  popModal = () => {
    console.log("I'm the queen of france");
  };
  destktopSearch = () => {
    return (
      <div className={css(styles.searchInputWrapper)}>
        <input className={css(styles.searchInput)} />
      </div>
    );
  };
  desktopMenu = () => {
    return (
      <ul className={css(styles.menu)}>
        <li className={css(styles.navMenuItem)}>Help Me</li>
        <li
          className={css(styles.navMenuItem)}
          id="getStarted"
          onClick={this.popModal}
        >
          Get Started!
        </li>
        <li className={css(styles.navMenuItem, styles.lastNavMenuItem)}>
          Get Funds
        </li>
      </ul>
    );
  };
  render() {
    return (
      <nav className={css(styles.nav)}>
        {this.props.clientWidth > 767 ? (
          this.destktopSearch()
        ) : (
          <div className={css(styles.searchButton)}>
            <FontAwesomeIcon
              className={css(styles.faBlock)}
              size="lg"
              icon="search"
            />
          </div>
        )}

        <div className={css(styles.logo)} onClick={this.props.handleLogOut}>
          crowdfunder
        </div>
        <div className={css(styles.menuWrap)}>
          {this.props.clientWidth > 767 ? (
            this.desktopMenu()
          ) : (
            <SVG style={styles.burger} width="21" />
          )}
        </div>

        <div>
          <FormModal
            loggedIn={this.props.loggedIn}
            username={this.loggedIn ? "" : this.props.username}
            handleClickLogIn={this.props.handleClickLogIn}
            handleInputChange={this.props.handleInputChange}
            usernameSignInInput={this.props.usernameSignInInput}
            passwordSignInInput={this.props.passwordSignInInput}
            usernameNewUserInput={this.props.usernameNewUserInput}
            passwordNewUserInput={this.props.passwordNewUserInput}
            emailNewUserInput={this.props.emailNewUserInput}
            locationNewUserInput={this.props.locationNewUserInput}
            handleClickNewUser={this.props.handleClickNewUser}
          />
        </div>
      </nav>
    );
  }
}
export default Nav;
