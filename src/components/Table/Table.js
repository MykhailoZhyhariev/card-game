import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Table.css';

import * as tableActions from '../../actions/tableActions.js';
import * as cardActions from '../../actions/cardActions.js';

import Card from '../Card/Card';

import { cards } from '../../common/cards';
import { getRandomInt, compareRandom } from '../../common/math';

class Table extends Component {
  constructor(props) {
    super(props);

    this.chooseTwoRandomCard = this.chooseTwoRandomCard.bind(this);
    this.changeCardState = this.changeCardState.bind(this);
    this.getTableRow = this.getTableRow.bind(this);
  }

  componentDidMount() {
    const { setCards, setCardsState } = this.props.tableActions;

    const card = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];

    let cards = []
    for (let i = 0; i < 9; i++) {
      const number = getRandomInt(0, card.length)
      const card_number = card[number];
      const result = this.chooseTwoRandomCard(card_number);

      cards = cards.concat(result);
      card.splice(number, 1);
    }


    let cardsState = {}
    for (let i = 0; i < cards.length; i++) {
      cardsState[cards[i]] = 'open';
    }

    setCardsState(cardsState);
    setCards(cards.sort(compareRandom));

    setTimeout( () => {
      for (let i = 0; i < cards.length; i++) {
        cardsState[cards[i]] = 'close';
      }
      setCardsState(cardsState);

    }, 3000);
  }

  changeCardState(key, newState) {
    const { changeState, state } = this.props;

    const cardState = state;
    cardState[key] = newState;
    changeState(cardState);
  }

  chooseTwoRandomCard(card_number) {
    const suit = ['C', 'D', 'H', 'S'];

    let cards = []
    for (let i = 0; i < 2; i++) {
      const suit_number = getRandomInt(0, suit.length);
      cards.push(card_number + suit[suit_number]);
      suit.splice(suit_number, 1);
    }

    return cards;
  }

  getTableRow(arr) {
    const { table, card } = this.props;
    const { setCardsState } = this.props.tableActions;
    const { selectCards } = this.props.cardActions;

    return (
      <div className="maingame__table-row">
        {arr.map( (item, key) =>
          <Card image={cards[item]}
                name={item}
                state={table.cardsState}
                changeState={setCardsState}
                addSelectedCard={selectCards}
                selectedCard={card.selectedCards}
                key={key} />
        )}
      </div>
    )
  }

  render() {
    const { getTableRow } = this;
    const { table } = this.props;

    return (
      <div className="maingame__table">
        {getTableRow(table.cardsArray.slice(0, 6))}
        {getTableRow(table.cardsArray.slice(6, 12))}
        {getTableRow(table.cardsArray.slice(12, 18))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Table);
