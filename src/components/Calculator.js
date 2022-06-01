import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    const {
      // eslint-disable-next-line react/prop-types
      total, operation, next, onBtnClick,
    } = this.props;
    return (
      <div className="container">
        <div className="result-container">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="first-row">
          <button type="button" onClick={onBtnClick} id="AC">
            AC
          </button>
          <button type="button" onClick={onBtnClick} id="+/-">
            +/-
          </button>
          <button type="button" onClick={onBtnClick} id="%">
            %
          </button>
          <button type="button" onClick={onBtnClick} id="÷">
            ÷
          </button>
        </div>
        <div className="second-row">
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="7"
          >
            7
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="8"
          >
            8
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="9"
          >
            9
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="*"
          >
            *
          </button>
        </div>
        <div className="third-row">
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="4"
          >
            4
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="5"
          >
            5
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="6"
          >
            6
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="-"
          >
            -
          </button>
        </div>
        <div className="fourth-row">
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="1"
          >
            1
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="2"
          >
            2
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="3"
          >
            3
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="+"
          >
            +
          </button>
        </div>
        <div className="fifth-row">
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="0"
          >
            0
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="."
          >
            .
          </button>
          <button
            type="button"
            className="col"
            onClick={onBtnClick}
            id="="
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
