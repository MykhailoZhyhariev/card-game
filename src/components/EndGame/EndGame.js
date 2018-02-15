import React, { Component } from 'react';
import './EndGame.css';

import image2x from '../../img/Group 2@2x.png';

class EndGame extends Component {
  render() {
    const { score, startGame } = this.props;

    return (
      <div className="endgame">
        <img className="endgame__image"
             src={image2x}
             alt="card" />
        <h1 className="endgame__text">Поздравляем! <br /> Ваш итоговый счет: {score}</h1>
        <button className="endgame__button"
                onClick={startGame}
                data-tid="EndGame-retryGame">
                Еще раз
        </button>
      </div>
    );
  }
}

export default EndGame;
