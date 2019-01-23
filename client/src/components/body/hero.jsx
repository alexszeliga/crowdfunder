import React from "react";
import "./hero.css";

const Hero = props => {
  return (
    <div
      className="background-image clearfix"
      style={{
        backgroundImage: `url(${props.imgUrl ? props.imgUrl : "./sky.jpg"})`
      }}
    >
      <h2 className="hero-headline">{props.headerText}</h2>
    </div>
  );
};

export default Hero;
