import React, { Component } from 'react';
import '../CSS/calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <form>
            <input type="text" />
        </form>    
        <div className="buttons">
            {keys.map((key, idx) => <button className="grid-item" key={idx}>{key}</button>)}
        </div>  
      </div>
    );
  }
}

export default Calculator;

const keys = ['(', ')', '', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];