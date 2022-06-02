import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './components/Calculator.css';
import calculate from './logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (element) => {
    const buttonName = element.target.id;
    this.setState((state) => calculate(state, buttonName));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Calculator total={total} next={next} operation={operation} onBtnClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
