import React from 'react';

// import React, { Component } from 'react'

export default class Welcome extends React.Component {
  render() {
    return (
      <p>Welcome {this.props.name}!</p>
    )
  }
}
