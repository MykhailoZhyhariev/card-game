import React, { Component } from 'react';
import './App.css';

// import StartGame from '../components/StartGame/StartGame.js'
// import EndGame from '../components/EndGame/EndGame.js'
import MainGame from '../components/MainGame/MainGame.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <StartGame /> */}
        <MainGame />
        {/* <EndGame /> */}
      </div>
    );
  }
}

export default App;
