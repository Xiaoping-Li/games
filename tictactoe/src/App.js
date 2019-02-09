import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ['', 'x', 'o', '', 'x', 'o', 'o', 'x', 'x'],
      tie: 0,
      player: 0,
      computer: 0
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Tic-Tac-Toe</h1>

        {/* Board */}
        <table className="board">
          <tr>
            <td>{this.state.data[0]}</td>
            <td className="middle-column">{this.state.data[1]}</td>
            <td>{this.state.data[2]}</td>
          </tr>
          <tr >
            <td className="middle-row">{this.state.data[3]}</td>
            <td className="middle-row middle-column">{this.state.data[4]}</td>
            <td className="middle-row">{this.state.data[5]}</td>
          </tr>
          <tr>
            <td>{this.state.data[6]}</td>
            <td className="middle-column">{this.state.data[7]}</td>
            <td>{this.state.data[8]}</td>
          </tr>
        </table>

        {/* Records */}
        <div className="records">
          <div>
            <div>PLAYER(X)</div>
            <div>{this.state.player}</div>
          </div>
          <div>
            <div>TIE</div>
            <div>{this.state.tie}</div>
          </div>
          <div>
            <div>COMPUTER(O)</div>
            <div>{this.state.computer}</div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
