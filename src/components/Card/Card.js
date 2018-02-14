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

class Card extends Component {
  constructor(props) {
    super(props);

    this.imageClick = this.imageClick.bind(this);

    this.state = {
      style: {
        opacity: 0
      },
      delay: 750
    }
  }

  imageClick() {
    const { table, card, name, index } = this.props;
    const { selectCards, setAnimationProcess } = this.props.cardActions;
    const { increaseNumberOfPairs, setCardsState } = this.props.tableActions;
    const { delay } = this.state;

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

    const startAnimation = (from, to, duration) => {
      setAnimationProcess(null);
      return ReactDOM.findDOMNode(this).animate([
        { transform: 'scaleX(' + from + ')' },
        { transform: 'scaleX(' + to + ')' }
      ], {
        duration: duration,
        easing: 'linear'
      });
    };

    const animationStart = startAnimation(1, 0, 250);
    animationStart.onfinish = () => {
      setState(name, 'open');
      const animationEnd = startAnimation(0, 1, 250);
      animationEnd.onfinish = () => {
        setAnimationProcess('finished');
      }
    };

    // подумать над этим куском кода
    if (!card.selectedCard) {
      selectCards({
        name: name,
        index: index
      });
    } else {
      if (card.selectedCard.name[0] === name[0] &&
          card.selectedCard.index !== index) {
        increaseNumberOfPairs(table.numberOfPairs + 1);
        changeCardsImage([name, card.selectedCard.name], 'delete', delay);
        selectCards(null);
      } else if (card.selectedCard.index !== index) {
        changeCardsImage([name, card.selectedCard.name], 'close', delay);
        selectCards(null);
      }
    }
  }

  render() {
    const { table, name } = this.props;
    const { style } = this.state;

    return (
      <img src={table.cardsState[name] === 'open' ? cards[name]: shirt}
           className="card"
           alt={name}
           id={name}
           onClick={table.cardsState[name] !== 'delete' ? this.imageClick : null}
           style={table.cardsState[name] === 'delete' ? style : null}
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
