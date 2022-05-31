import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="result-container">0</div>
        <div className="first-row">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">÷</button>
        </div>
        <div className="second-row">
          <button type="button" className="col">7</button>
          <button type="button" className="col">8</button>
          <button type="button" className="col">9</button>
          <button type="button" className="col">*</button>
        </div>
        <div className="third-row">
          <button type="button" className="col">4</button>
          <button type="button" className="col">5</button>
          <button type="button" className="col">6</button>
          <button type="button" className="col">-</button>
        </div>
        <div className="fourth-row">
          <button type="button" className="col">1</button>
          <button type="button" className="col">2</button>
          <button type="button" className="col">3</button>
          <button type="button" className="col">+</button>
        </div>
        <div className="fifth-row">
          <button type="button" className="col">0</button>
          <button type="button" className="col">.</button>
          <button type="button" className="col">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
