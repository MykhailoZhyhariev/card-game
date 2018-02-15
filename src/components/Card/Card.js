import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Card.css';

import * as tableActions from '../../actions/tableActions';
import * as cardActions from '../../actions/cardActions';
import * as appActions from '../../actions/appActions';

import { cards } from '../../cards';
import shirt from '../../img/Cards/shirt.png';

const DELAY = 750;
const ANIMATION_DURATION = 250;

class Card extends Component {
  constructor(props) {
    super(props);

    this.imageClick = this.imageClick.bind(this);

    this.state = {
      img: shirt
    }
  }

  imageClick() {
    const { app, table, card, name, index } = this.props;
    const { selectCards, setAnimationState } = this.props.cardActions;
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

    const animation = (from, to, duration) => {
      setAnimationState(null);
      return ReactDOM.findDOMNode(this).animate([
        { transform: `scaleX(${from})` },
        { transform: `scaleX(${to})` }
      ], {
        duration: duration,
        easing: 'linear'
      })
    }

    const animationStart = animation(1, 0, ANIMATION_DURATION);
    animationStart.onfinish = () => {
      setState(name, 'open');
      const animationEnd = animation(0, 1, ANIMATION_DURATION);
      animationEnd.onfinish = () => {
        setAnimationState('finished');
      }
    }

    if (!card.selectedCard) {
      selectCards({
        name: name,
        index: index
      });
    } else {
      if (card.selectedCard.name[0] === name[0] &&
          card.selectedCard.index !== index) {
        increaseNumberOfPairs(table.numberOfPairs + 1);
        changeCardsImage([name, card.selectedCard.name], 'delete', DELAY);
        changeScore(app.score + (9 - table.numberOfPairs) * 42);
        selectCards(null);
      } else if (card.selectedCard.index !== index) {
        changeCardsImage([name, card.selectedCard.name], 'close', DELAY);
        changeScore(app.score - (table.numberOfPairs) * 42);
        selectCards(null);
      }
    }
  }

  render() {
    const { table, name } = this.props;

    const testAttr = table.cardsState[name] === 'open' ? "Card" : 'Card-flipped'

    return (
      <img src={table.cardsState[name] === 'open' ? cards[name]: shirt}
           className="card"
           alt={name}
           onClick={table.cardsState[name] !== 'delete' ? this.imageClick : null}
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
