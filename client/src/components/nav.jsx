import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SVG from "./menuBar";
// import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  nav: {
    fontFamily: "'Raleway', sans-serif;",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black"
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
    height: "100%"
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
    flex: 1,
    textAlign: "center"
  },
  searchButton: {
    flex: 1,
    marginLeft: ".5em"
  },
  faBlock: {
    display: "block",
    width: "20px"
  }
});
class Nav extends Component {
  desktopMenu = () => {
    return (
      <ul class={css(styles.menu)}>
        <li class={css(styles.navMenuItem)}>Help Me</li>
        <li class={css(styles.navMenuItem)}>Sign In</li>
        <li class={css(styles.navMenuItem, styles.lastNavMenuItem)}>
          Get Funds
        </li>
      </ul>
    );
  };
  render() {
    return (
      <nav class={css(styles.nav)}>
        <div class={css(styles.searchButton)}>
          <FontAwesomeIcon class={css(styles.faBlock)} size="" icon="search" />
        </div>
        <div class={css(styles.logo)}>crowdfunder</div>
        <div class={css(styles.menuWrap)}>
          {this.props.clientWidth > 767 ? (
            this.desktopMenu()
          ) : (
            <SVG style={styles.burger} width="24" />
          )}
        </div>
      </nav>
    );
  }
}

export default Nav;
