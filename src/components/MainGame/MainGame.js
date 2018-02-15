import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MainGame.css';

import * as tableActions from '../../actions/tableActions';
import * as cardActions from '../../actions/cardActions';
import * as appActions from '../../actions/appActions';

import Table from '../Table/Table.js';

const DELAY = 5000;
const MAX_PAIRS = 9;

class MainGame extends Component {
  constructor(props) {
    super(props);

    this.startNewGame = this.startNewGame.bind(this);
  }

  startNewGame() {
    const { setCardsState, increaseNumberOfPairs } = this.props.tableActions;
    const { selectCards } = this.props.cardActions;
    const { changeScore } = this.props.appActions;

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
    }, DELAY);

    selectCards(null);
    increaseNumberOfPairs(0);
    changeScore(0);
  }

  componentDidMount() {
    this.startNewGame();
  }

  componentWillUnmount() {
    this.props.tableActions.increaseNumberOfPairs(0);
  }

  render() {
    const { app, table, card } = this.props;
    const { changeGameState } = this.props.appActions;

    if (table.numberOfPairs === MAX_PAIRS &&
        card.animationState === 'finished') {
          setTimeout( () => changeGameState('end'), 500);
    }

    return (
      <div className="maingame">
        <div className="container">
          <div className="maingame__panel">
            <button className="maingame__button"
                    onClick={this.startNewGame}
                    data-tid="Menu-newGame">
                    Начать заново
            </button>
            <span className="maingame__score">
              Очки:
              <span className="maingame__score-digit" data-tid="Menu-scores">{app.score}</span>
            </span>
          </div>
          <Table />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    table: state.table,
    card: state.card,
    app: state.app
  }
}

function mapDispatchToProps(dispatch) {
  return {
    tableActions: bindActionCreators(tableActions, dispatch),
    cardActions: bindActionCreators(cardActions, dispatch),
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGame);
