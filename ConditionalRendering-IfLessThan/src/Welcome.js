import React from 'react';
import Age from './Age';


export default class Welcome extends React.Component {
  render() {
    const age = this.props.age;
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {this.props.age && age > 18 && age < 65 ? <Age age={this.props.age} /> : null}
      </div>
    );
  }
}


