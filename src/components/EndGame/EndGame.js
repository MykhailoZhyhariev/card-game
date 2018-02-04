import React, { Component } from 'react';
import './EndGame.css';

import image from '../../img/Group 2@2x.png'

class EndGame extends Component {
  render() {
    return (
      <div className="endgame">
        <img className="endgame__image" src={image} alt="card" />
        <h1 className="endgame__name">Поздравляем! <br /> Ваш итоговый счет: 666</h1>
      </div>
    );
  }
}

export default EndGame;
