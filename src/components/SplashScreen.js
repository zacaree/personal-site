import React, { Component } from "react";
import Logo from "../images/Logo";
import { animated } from "react-spring/renderprops";

export default class SplashScreen extends Component {
  render() {
    return (
      <animated.div className="splashscreen" style={this.props.style}>
        <div className="splashLogoContainer">
          <div className="mask" />
          <div className="mask" />
          <div className="mask" />
          <Logo />
        </div>
      </animated.div>
    );
  }
}