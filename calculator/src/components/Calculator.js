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