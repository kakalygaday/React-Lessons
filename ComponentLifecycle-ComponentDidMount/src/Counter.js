import React from 'react';
import CounterDisplay from './CounterDisplay';



export default class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + this.props.incrementAmount
            })
        }, this.props.incrementInterval);
    }
  render() {
    return (
      <div>
        <CounterDisplay count = {this.state.count} />
      </div>
    )
  }
}

