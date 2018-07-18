

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./devices.css";

export default class galaxynote8 extends Component {
  render() {
    let color;
    this.props.color ? (color = this.props.color) : (color = "black");

    return (

      <div className="marvel-device note8">
        <div className="inner" />
        <div className="overflow">
          <div className="shadow" />
        </div>
        <div className="speaker" />
        <div className="sensors" />
        <div className="more-sensors" />
        <div className="sleep" />
        <div className="volume" />
        <div className="camera" />
        <div className="screen">
          <iframe src={this.props.url} />
        </div>
      </div>
    );
  }
}


galaxynote8.propTypes = {
  color: PropTypes.string,
  url: PropTypes.string
};