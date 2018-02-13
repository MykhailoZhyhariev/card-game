import React, { Component } from 'react';
import './MainGame.css';

import Table from '../Table/Table.js';

class MainGame extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className="maingame">
        <div className="container">
          <div className="maingame__panel">
            <button className="maingame__button">Начать заново</button>
            <span className="maingame__score">
              Очки:
              <span className="maingame__score-digit">0</span>
            </span>
          </div>
          <Table />
        </div>
      </div>
    );
  }
}

export default MainGame;
