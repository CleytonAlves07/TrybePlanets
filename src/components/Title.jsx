import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.headline}</h2>
      </div>
    );
  }
}
