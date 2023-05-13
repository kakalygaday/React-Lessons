import React from 'react';

export default class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    handleCounterIncreace = () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementAmount
            }
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCounterIncreace}>Increase by Clicking</button>
      </div>
    )
  }
}

