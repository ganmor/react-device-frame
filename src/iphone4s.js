import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './devices.css';
import ContentFrame from './content-frame';

export default class Iphone4s extends Component {
	render() {
		let color;
		this.props.color ? (color = this.props.color) : (color = 'black');

		return (
			<div
				className={`marvel-device iphone4s ${this.props.orientation} ${color}`}
			>
				<div className="top-bar" />
				<div className="sleep" />
				<div className="volume" />
				<div className="camera" />
				<div className="sensor" />
				<div className="speaker" />
				<div className="screen">
					<ContentFrame {...this.props} />
				</div>
				<div className="home" />
				<div className="bottom-bar" />
			</div>
		);
	}
}

Iphone4s.propTypes = {
	color: PropTypes.string,
	site: PropTypes.string,
	orientation: PropTypes.string
};
