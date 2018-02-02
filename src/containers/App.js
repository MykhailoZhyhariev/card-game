import React, { Component } from 'react';
import './App.css';

import StartGame from '../components/StartGame/StartGame.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <StartGame />
      </div>
    );
  }
}

export default App;
