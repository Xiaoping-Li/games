import React, { Component } from 'react';
import '../CSS/calculator.css';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            result: 0,
            counted: false,
        };
    }

    handleClean = () => {
      if (this.state.counted) {
        this.setState({input: '', result: 0, counted: !this.state.counted});
      } else {
        const n = this.state.input.length;
        const cleanRtn = this.state.input.slice(0, n - 1);
        this.setState({input: cleanRtn});
      }   
    }

    // Check if the Operation Priority of current and the last item in the stack
    highPriority = (current, prev) => {
        if ((prev === '*' || prev === '/') && (current === '+' || current === '-')) return false;
        return true;
    };

    // Check if the input str has valid brackets pairs, return true / false
    checkInputValid = (str) => {
      let valid = true;
      const brakets = str.split('').filter(item => item === '(' || item === ')');
      if (!brakets.length) return valid;
      let stack = [];
      
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

    // 中缀表达式转换为后缀表达式: Infix Expressions ---> Postfix Expressions
    // A + B * C ---> A B C * +
    convertInput = str => {
        let strArray = str.split('');
        let inputArray = [];
      
        // split() will make number(like 123) to multiple digits (1,2,3), this function will combine
        // separated digits to original num again
        if (str.length < 2) {
          inputArray.push(str);
        } else {
          let i = 0;
          while (i < str.length) {
            let item = strArray[i];
            if (item === '+' || item === '-' || item === '*' || item === '/' || item === '(' || item === ')') {
              inputArray.push(item);
              i++;
            } else {
              let wholeNum = item;
              let k = i + 1;
              while (Number(strArray[k]) || Number(strArray[k]) === 0 || strArray[k] === '.') {
                wholeNum += strArray[k];
                k++;
              }
              inputArray.push(wholeNum);
              i = k;
            }
          }
        }
      
        // Incase to keep the original num instead of separated digits, save output into array as 'rtn'
        let stack = [];
        let rtn = [];
        
        for (let i = 0; i < inputArray.length; i++) {
          let item = inputArray[i];
          if (Number(item)) {
            rtn.push(item);
          } else {
            if (!stack.length) {
              stack.push(item);
            } else {
              if (item === ')') {
                while(stack[stack.length - 1] !== '(' && stack.length) {
                  rtn.push(stack.pop());
                }
                stack.pop();
              } else {
                let prev = stack[stack.length - 1];
                let checkPriority = this.highPriority(item, prev);
      
                if (checkPriority) {
                  stack.push(item);
                } else {
                  while (!checkPriority && stack.length && stack[stack.length - 1] !== '(') {
                    rtn.push(stack.pop());
                    prev = stack[stack.length - 1];
                    checkPriority = this.highPriority(item, prev);
                  }
                  stack.push(item);
                }
              }
            } 
          }
        }
        
        while (stack.length) {
          rtn.push(stack.pop());;
        }
      
        return rtn;
    }

    // Count the return from convertInput, get the final result
    countInput = converted => {
      let stack = [];
      //let rtn = 0;
      for (let i = 0; i < converted.length; i++) {
        let item = converted[i];
        if (Number(item)) {
          stack.push(item);
        } else {
          // Pop out last two of stack, and use 'item' oprator
          // push the return value to stack
          if (stack.length < 2) return;
          let temp;
          let last = Number(stack.pop());
          let last2 = Number(stack.pop());
          switch(item) {
            case "+":
              temp = last2 + last;
              break;
            case "-":
              temp = last2 - last;
              break;
            case "*":
              temp = last2 * last;
              break;
            case "/":
              temp = last2 / last;
              break;
          }
    
          stack.push(temp.toString())
        }
      }
    
      return stack.length > 1 ? 0 : Number(stack.pop());       
    }

  handleClick = (e) => {
    const btnValue = e.target.value;
    if (btnValue === '=') {
      if (!this.checkInputValid(this.state.input)) {
        this.setState({input: 'Brackets pair error...'});
      } else {
        let converted = this.convertInput(this.state.input);
        let answer = this.countInput(converted);
        this.setState({ result: answer, counted: !this.state.counted });  
      }    
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
          {this.state.counted ? this.state.result : this.state.input}
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

const keys = ['(', ')', '', 'C', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];