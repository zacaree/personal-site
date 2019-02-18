import React, { Component } from "react";
import ArrowDown from "../images/ArrowDown";

export default class Strength extends Component {
  state = {
    open: false
  };

  handleMouseEnter = () => {
    this.setState({ open: true });
  };
  handleMouseLeave = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { strength, description } = this.props.strength;
    return (
      <li
        className="strength"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="strengthLabel">
          <p>{strength}</p>
          <ArrowDown />
        </div>
        {open && (
          <div className="sub">
            <p>{description}</p>
          </div>
        )}
      </li>
    );
  }
}