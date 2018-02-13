import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MainGame.css';

import * as tableActions from '../../actions/tableActions';
import * as cardActions from '../../actions/cardActions';

import Table from '../Table/Table.js';

class MainGame extends Component {
  constructor(props) {
    super(props);

    this.startNewGame = this.startNewGame.bind(this);

    this.state = {
      delay: 5000
    }
  }

  startNewGame() {
    const { setCardsState } = this.props.tableActions;
    const { delay } = this.state;

    const randSort = () => Math.random() - 0.5;

    const setState = (arr, state) => {
      const st = {};
      arr.map(key => st[key] = state);
      setCardsState(st);
    };

    const arrSlice = (string, length) => {
      return string.split(' ')
                   .sort(randSort)
                   .slice(0, length)
    }
    const cardsName = arrSlice('2 3 4 5 6 7 8 9 0 J Q K A', 9);

    const cards = [].concat(...cardsName.map(item => {
      const suits = arrSlice('C D H S', 2);
      return [item + suits[0], item + suits[1]];
    })).sort(randSort);

    setState(cards ,'open');

    setTimeout( () => {
      setState(cards, 'close');
    }, delay);
  }

  render() {
    return (
      <div className="maingame">
        <div className="container">
          <div className="maingame__panel">
            <button className="maingame__button"
                    onClick={this.startNewGame}>
                    Начать заново
            </button>
            <span className="maingame__score">
              Очки:
              <span className="maingame__score-digit">0</span>
            </span>
          </div>
          <Table startGame={this.startNewGame} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    table: state.table,
    card: state.card
  }
}

function mapDispatchToProps(dispatch) {
  return {
    tableActions: bindActionCreators(tableActions, dispatch),
    cardActions: bindActionCreators(cardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGame);
