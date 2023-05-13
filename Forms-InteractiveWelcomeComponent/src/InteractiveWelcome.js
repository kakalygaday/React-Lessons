import React, { Component } from 'react'
import Welcome from './Welcome'


export default class InteractiveWelcome extends Component {
    state = {
        name: ''
    }
    handleInputChange = (event) => {
        this.setState({
            name : event.target.value 
        });
    }
  render() {
    return (
      <div>
        <label>Please Enter your name:</label>
        <input
            value = {this.state.name}
            onChange={this.handleInputChange}>
        </input>
        <Welcome name = {this.state.name}/>
      </div>
    )
  }
}
