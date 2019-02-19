import React, { Component } from 'react';


class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <form>
            <input type="text" />
            <div>
                {keys.map((key, idx) => <button key={idx}>{key}</button>)}
            </div>
        </form>
      </div>
    );
  }
}

export default Calculator;

const keys = ['(', ')', '', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];