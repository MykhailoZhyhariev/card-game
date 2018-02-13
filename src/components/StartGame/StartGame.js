import React, { Component } from 'react';
import './StartGame.css';

import image from '../../img/StartGame@2x.png'

class StartGame extends Component {
  render() {
    const startGame = () => {
      this.props.startGame('game');
    }

    return (
      <div className="startgame">
        <img className="startgame__image" src={image} alt="card" />
        <h1 className="startgame__name">memory game</h1>
        <button className="startgame__button"
                onClick={startGame}>
                Начать игру
        </button>
      </div>
    );
  }
}

export default StartGame;
