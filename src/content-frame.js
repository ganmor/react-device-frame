import React from 'react';

export default class ContentFrame extends React.Component {
  render() {
    return (
      <iframe
        id={this.props.id}
        name={this.props.name}
        src={this.props.src}
      />
    );
  }
}
