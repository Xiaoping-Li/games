import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
