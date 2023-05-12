import React from 'react';

// import React, { Component } from 'react'

export default class Welcome extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <p>Welcome {name ? name: "Unknown"}!</p>
    )
  }
}
