import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentFrame from './content-frame';

import './devices.css';

export default class Nexus5 extends Component {
	render() {
		let color;
		this.props.color ? (color = this.props.color) : (color = 'gold');

		return (
			<div className={`marvel-device nexus5 ${this.props.orientation}`}>
				<div className="top-bar" />
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

Nexus5.propTypes = {
	color: PropTypes.string,
	site: PropTypes.string,
	orientation: PropTypes.string
};
