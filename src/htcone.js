import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentFrame from './content-frame';

import './devices.css';

export default class Htcone extends Component {
	render() {
		let color;
		this.props.color ? (color = this.props.color) : (color = 'gold');

		return (
			<div className={`marvel-device htc-one ${this.props.orientation}`}>
				<div className="top-bar" />
				<div className="camera" />
				<div className="sensor" />
				<div className="speaker" />
				<div className="screen">
					<ContentFrame {...this.props} />
				</div>
			</div>
		);
	}
}

Htcone.propTypes = {
	color: PropTypes.string,
	site: PropTypes.string,
	orientation: PropTypes.string
};
