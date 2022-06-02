import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { total } = state;
  const { next } = state;
  const { operation } = state;

  function handleClick(element) {
    const buttonName = element.target.id;
    setState((state) => calculate(state, buttonName));
  }
  return (
    <div className="container">
      <div className="result-container">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      <div className="first-row">
        <button type="button" onClick={handleClick} id="AC">
          AC
        </button>
        <button type="button" onClick={handleClick} id="+/-">
          +/-
        </button>
        <button type="button" onClick={handleClick} id="%">
          %
        </button>
        <button type="button" onClick={handleClick} id="÷">
          ÷
        </button>
      </div>
      <div className="second-row">
        <button
          type="button"
          onClick={handleClick}
          id="7"
        >
          7
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="8"
        >
          8
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="9"
        >
          9
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="x"
        >
          x
        </button>
      </div>
      <div className="third-row">
        <button
          type="button"
          onClick={handleClick}
          id="4"
        >
          4
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="5"
        >
          5
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="6"
        >
          6
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="-"
        >
          -
        </button>
      </div>
      <div className="fourth-row">
        <button
          type="button"
          onClick={handleClick}
          id="1"
        >
          1
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="2"
        >
          2
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="3"
        >
          3
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="+"
        >
          +
        </button>
      </div>
      <div className="fifth-row">
        <button
          type="button"
          onClick={handleClick}
          id="0"
        >
          0
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="."
        >
          .
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
