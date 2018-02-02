import React, { Component } from 'react';
import './App.css';

import StartGame from '../components/StartGame/StartGame.js'
import EndGame from '../components/EndGame/EndGame.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <StartGame />
        <EndGame />
      </div>
    );
  }
}

export default App;
