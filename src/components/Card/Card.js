import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Card.css';

import * as tableActions from '../../actions/tableActions';
import * as cardActions from '../../actions/cardActions';

import { cards } from '../../cards';
import shirt from '../../img/Cards/shirt.png';

class Card extends Component {
  constructor(props) {
    super(props);

    this.imageClick = this.imageClick.bind(this);

    this.state = {
      style: {
        height: 0,
        overflow: 'hidden'
      },
      delay: 500
    }
  }

  imageClick() {
    const { table, card, name } = this.props;
    const { delay } = this.state;
    const { selectCards } = this.props.cardActions;
    const { setCardsState } = this.props.tableActions;

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
        changeCardsImage([name, card.selectedCard], 'delete', delay);
      } else {
        changeCardsImage([name, card.selectedCard], 'close', delay);
      }
      selectCards(null);
    }
  }

  render() {
    const { table, name } = this.props;
    const { style } = this.state;

    return (
      <img src={table.cardsState[name] === 'open' ? cards[name]: shirt}
           className="card"
           alt={name}
           onClick={this.imageClick}
           style={table.cardsState[name] === 'delete' ? style : null}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
