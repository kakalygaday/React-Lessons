import React from 'react';
import Age from './Age';


export default class Welcome extends React.Component {
  render() {
    const age = this.props.age;
    const name = this.props.name;
    const renderIf = name === 'John' && age > 18 && age < 65;
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {renderIf ? <Age age={this.props.age} /> : null}
      </div>
    );
  }
}


