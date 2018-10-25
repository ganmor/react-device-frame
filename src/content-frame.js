
import React from 'react';

export default class ContentFrame extends React.Component {
	render() {
		return <iframe src={this.props.src} name={this.props.name} />;
	}
}
