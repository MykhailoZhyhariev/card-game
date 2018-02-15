import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Card.css';

import * as tableActions from '../../actions/tableActions';
import * as cardActions from '../../actions/cardActions';
import * as appActions from '../../actions/appActions';

import { cards } from '../../cards';
import shirt from '../../img/Cards/shirt.png';

const DELAY = 500;

class Card extends Component {
  constructor(props) {
    super(props);

    this.imageClick = this.imageClick.bind(this);
  }

  imageClick() {
    const { app, table, card, name } = this.props;
    const { selectCards } = this.props.cardActions;
    const { increaseNumberOfPairs, setCardsState } = this.props.tableActions;
    const { changeScore } = this.props.appActions;

    const setState = (key, newState) => {
      const state = table.cardsState;
      state[key] = newState;
      setCardsState(state);
    };

    const changeCardsImage = (cards, state, ms) => {
      setTimeout( () => {
        cards.map(card => setState(card, state));
      }, ms);
    };

    setState(name, 'open');

    if (!card.selectedCard) selectCards(name);
    else {
      if (card.selectedCard[0] === name[0]) {
        increaseNumberOfPairs(table.numberOfPairs + 1);
        changeCardsImage([name, card.selectedCard], 'delete', DELAY);
        changeScore(app.score + (9 - table.numberOfPairs) * 42);
      } else {
        changeCardsImage([name, card.selectedCard], 'close', DELAY);
        changeScore(app.score - (table.numberOfPairs) * 42);
      }
      selectCards(null);
    }
  }

  render() {
    const { table, name } = this.props;

    const testAttr = table.cardsState[name] === 'open' ? "Card" : 'Card-flipped'

    return (
      <img src={table.cardsState[name] === 'open' ? cards[name]: shirt}
           className="card"
           alt={table.cardsState[name] === 'open' ? name : 'shirt'}
           onClick={table.cardsState[name] === 'close' ? this.imageClick : null}
           onDragStart={(e) => e.preventDefault()}
           style={table.cardsState[name] === 'delete' ? {opacity: 0} : null}
           data-tid={testAttr}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
