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

    handleClick = (e) => {
        const btnValue = e.target.value;
        if (btnValue === '=') {
            console.log('calculating...');
            return;
        } else if (btnValue === 'AC') {
            console.log('deleting...');
            return;
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

const keys = ['(', ')', '', 'AC', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'];