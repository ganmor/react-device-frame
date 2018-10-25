import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentFrame from './content-frame';

import './devices.css';

export default class Ipad extends Component {
	render() {
		let color;
		this.props.color ? (color = this.props.color) : (color = 'black');

		return (
			<div className={`marvel-device ipad ${this.props.orientation} ${color}`}>
				<div className="camera" />
				<div className="screen">
					<ContentFrame {...this.props} />
				</div>
				<div className="home" />
			</div>
		);
	}
}

Ipad.propTypes = {
	color: PropTypes.string,
	site: PropTypes.string,
	orientation: PropTypes.string
};
