import React from "react";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  burger: {
    display: "block",
    float: "right",
    marginRight: ".5em"
  }
});
const SVG = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    version="1.1"
    className={css(styles.burger)}
    width={props.width}
    height={props.width}
  >
    <g id="surface1">
      <path d="M 4 4 L 4 8 L 32 8 L 32 4 Z M 4 14 L 4 18 L 32 18 L 32 14 Z M 4 24 L 4 28 L 32 28 L 32 24 Z " />
    </g>
  </svg>
);

export default SVG;
