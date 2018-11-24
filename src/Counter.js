import React, { Component } from 'react';


class Counter extends Component {

  state = {
    counter: this.props.initialValue || 0,
    incrementTo: this.props.incrementTo || 2,
    reduceTo: this.props.reduceTo || 2,
  };

  increment = () => {
    console.log(this.props);
    this.setState(prevState => ({ counter: prevState.counter + this.state.incrementTo }));
    this.props.onChange(this.state.counter);

    const addFive = function(yourNumber) {
      const result = yourNumber + 5;
      console.log(result);
    }

    addFive(1);
    addFive(365);
    addFive(0.218);

  };

  reduce = () => {
    this.setState(prevState => ({ counter: prevState.counter - this.state.reduceTo }));
    this.props.onChange(this.state.counter);
  };

  render() {
    return (
      <div className="counter">
        <div className="value">Counter value: {this.state.counter}</div>
        <div className="buttons-block">
          <button onClick={this.reduce} className="button button-down">Down! -{this.state.reduceTo}</button>
          <button onClick={this.increment} className="buttons button-up">Up! +{this.state.incrementTo}</button>
        </div>
      </div>
    );
  }
}

export default Counter
