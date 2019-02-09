import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ['', '', '', '', '', '', '', '', ''],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>
      </div>
    );
  }
}

export default App;
