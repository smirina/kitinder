import React, { Component } from 'react';
import './Counter.js'
import Counter from './Counter.js';

class App extends Component {

  handleChange = value => {
    alert(value);
  };

  render() {
    return (
      <div>
        <Counter onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
