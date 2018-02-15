import React, { Component } from 'react';
import './EndGame.css';

import image2x from '../../img/Group 2@2x.png'
import image from '../../img/Group 2.png'

class EndGame extends Component {
  render() {
    const { score, startGame } = this.props;

    return (
      <div className="endgame">
        <img className="endgame__image"
             src={image2x}
             srcset={`${image}`}
             alt="card" />
        <h1 className="endgame__text">Поздравляем! <br /> Ваш итоговый счет: {score}</h1>
        <button className="endgame__button"
                onClick={startGame}>
                Еще раз
        </button>
      </div>
    );
  }
}

export default EndGame;
