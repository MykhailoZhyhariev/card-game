import React, { Component } from 'react';
import './Table.css';

import Card from '../Card/Card.js';

import { cards } from '../../cards.js';
import { getRandomInt, compareRandom } from '../../math.js';

class Table extends Component {
  constructor(props) {
    super(props);

    this.chooseTwoRandomCard = this.chooseTwoRandomCard.bind(this);
    this.getTableRow = this.getTableRow.bind(this);

    this.state = {
      arrCards: []
    }
  }

  chooseTwoRandomCard() {
    const card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suit = ['C', 'D', 'H', 'S'];

    const card_number = getRandomInt(0, card.length);

    for (let i = 0; i < 2; i++) {
      const suit_number = getRandomInt(0, suit.length);

      const item = card[card_number] + suit[suit_number];
      this.setState(prevState => ({
        arrCards: [...prevState.arrCards, item]
      }))
      suit.splice(suit_number, 1);
    }
  }

  componentDidMount() {
    for (let i = 0; i < 9; i++) this.chooseTwoRandomCard();

    this.setState(prevState => ({
      arrCards: prevState.arrCards.sort(compareRandom)
    }));
  }

  getTableRow(arr) {
    return (
      <div className="maingame__table-row">
        {arr.map( (item, key) =>
          <Card image={cards[item]} alt={item} key={key} />
        )}
      </div>
    )
  }

  render() {
    const { getTableRow } = this;
    const { arrCards } = this.state;

    return (
      <div className="maingame__table">
        {getTableRow(arrCards.slice(0, 6))}
        {getTableRow(arrCards.slice(6, 12))}
        {getTableRow(arrCards.slice(12, 18))}
      </div>
    );
  }
}

export default Table;
