import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyleSheet, css } from "aphrodite";
import { fas } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  faBlock: {},
  threeUp: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    flexFlow: "column wrap",
    fontFamily: "Raleway",
    margin: "auto",
    "@media (min-width: 768px)": {
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      maxWidth: "800px"
    }
  },
  headthree: {
    padding: 0,
    margin: 0
  },
  block: {
    display: "block",
    padding: "2em 0em",
    margin: "1em",
    flex: "1",
    borderRadius: "4px"
  },
  blockMid: {
    backgroundColor: "#eee"
  }
});
class ThreeUp extends Component {
  state = {};
  render() {
    const faSize = this.props.clientWidth > 767 ? "5x" : "3x";
    return (
      <div className={css(styles.threeUp)}>
        <div className={css(styles.block)}>
          <FontAwesomeIcon
            className={css(styles.faBlock)}
            size={faSize}
            icon="flask"
          />
          <h3 className={css(styles.headthree)}>Your Idea</h3>
        </div>
        <div className={css(styles.block, styles.blockMid)}>
          <FontAwesomeIcon
            className={css(styles.faBlock)}
            size={faSize}
            icon="quidditch"
          />
          <h3 className={css(styles.headthree)}>Your team</h3>
        </div>
        <div className={css(styles.block)}>
          <FontAwesomeIcon
            className={css(styles.faBlock)}
            size={faSize}
            icon="school"
          />
          <h3 className={css(styles.headthree)}>Your community</h3>
        </div>
      </div>
    );
  }
}

export default ThreeUp;
