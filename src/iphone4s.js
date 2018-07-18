

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./devices.css";

export default class iphone4s extends Component {
  render() {
    let color;
    this.props.color ? (color = this.props.color) : (color = "black");

    return (
      <div className={`marvel-device iphone4s ${color}`}>
        <div className="top-bar" />
        <div className="sleep" />
        <div className="volume" />
        <div className="camera" />
        <div className="sensor" />
        <div className="speaker" />
        <div className="screen">
          <iframe src={this.props.url} />
        </div>
        <div className="home" />
        <div className="bottom-bar" />
      </div>
    );
  }
}


iphone4s.propTypes = {
  color: PropTypes.string,
  url: PropTypes.string
};