import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentFrame from './content-frame';

import './devices.css';

export default class Iphone8 extends Component {
	render() {
		let color;
		this.props.color ? (color = this.props.color) : (color = 'gold');

		return (
			<div
				className={`marvel-device iphone8 ${this.props.orientation} ${color}`}
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

Iphone8.propTypes = {
	color: PropTypes.string,
	orientation: PropTypes.string,
	site: PropTypes.string
};
