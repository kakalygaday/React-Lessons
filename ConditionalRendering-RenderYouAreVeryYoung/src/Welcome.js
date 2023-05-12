import React from 'react';
import Age from './Age';


export default class Welcome extends React.Component {
  render() {
    const age = this.props.age;
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {age > 18 ? <Age age={this.props.age} /> : "You are very young!"}
      </div>
    );
  }
}


