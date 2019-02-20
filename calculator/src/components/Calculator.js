import React, { Component } from 'react';
import '../CSS/calculator.css';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            result: 0,
        };
    }

    handleClean = () => {
        const n = this.state.input.length;
        const cleanRtn = this.state.input.slice(0, n - 1);
        this.setState({input: cleanRtn});
    }

    // Check if the Operation Priority of current and the last item in the stack
    highPriority = (current, prev) => {
        if ((prev === '*' || prev === '/') && (current === '+') || current === '-') return false;
        return true;
    };

    // Check if the input str has valid brackets pairs, return true / false
    checkInputValid = (str) => {
        const brakets = str.split('').filter(item => item === '(' || item === ')');
        let stack = [];
        let valid = true;
        for (let i = 0; i < brakets.length; i++) {
            let item = brakets[i];
            if (item === '(') {
            stack.push(item);
            } else {
            if (!stack.length || stack[stack.length - 1] !== '(') {
                valid = false;
                break;
            }
            stack.pop();
            }
        }
        if (stack.length) valid = false;
        return valid;
    }

    convertInput = str => {
        
    }

    handleClick = (e) => {
        const btnValue = e.target.value;
        if (btnValue === '=') {
            console.log('calculating...');
        } else if (btnValue === 'C') {
            this.handleClean();
        } else {
            const updateInput = this.state.input + btnValue;
            this.setState({input: updateInput});
        }
    }

    render() {
        return (
            <div className="calculator">
                <div className="screen">
                    {this.state.input}
                </div>    
                <div className="buttons">
                    {keys.map((key, idx) => 
                        <button 
                            className="grid-item"
                            value={key} 
                            onClick={this.handleClick}
                            key={idx}
                        >
                            {key}
                        </button>
                    )}
                </div>  
            </div>
        );
    }
}

export default Calculator;

const keys = ['(', ')', '', 'C', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];