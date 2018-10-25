import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentFrame from './content-frame';

import './devices.css';

export default class Galaxynote8 extends Component {
	render() {
		let color;
		this.props.color ? (color = this.props.color) : (color = 'black');

		return (
			<div className={`marvel-device note8 ${this.props.orientation}`}>
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
					<ContentFrame {...this.props} />
				</div>
			</div>
		);
	}
}

Galaxynote8.propTypes = {
	color: PropTypes.string,
	site: PropTypes.string,
	orientation: PropTypes.string
};
