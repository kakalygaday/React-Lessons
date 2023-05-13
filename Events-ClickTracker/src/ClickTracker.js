import React from 'react';

export default class ClickTracker extends React.Component {
    state = {
        lastClicked: ''
    };

    handleClickButton = (event) => {
      const buttonId = event.target.id;
        this.setState({
          lastClicked: buttonId
        });
    };
    
  render() {
    return (
      <div>
        
        <button id="Button 1" onClick={this.handleClickButton}>Button 1</button>
        <button id="Button 2" onClick={this.handleClickButton}>Button 2</button>
        <button id="Button 3" onClick={this.handleClickButton}>Button 3</button>
        <p>Last clicket button: {this.state.lastClicked}</p>
      </div>
    )
  }
}

