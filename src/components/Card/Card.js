import React, { Component } from 'react';
import './Card.css';

import shirt from '../../img/Cards/shirt.png';

class Card extends Component {
  constructor(props) {
    super(props);

    this.imageClick = this.imageClick.bind(this);
    this.changeCardState = this.changeCardState.bind(this);
  }

  changeCardState(key, newState) {
    const { changeState, state } = this.props;

    const cardState = state;
    cardState[key] = newState;
    changeState(cardState);
  }

  imageClick() {
    const { addSelectedCard, selectedCard, name } = this.props;
    const { changeCardState } = this;

    changeCardState(name, 'open');

    if (!selectedCard) {
      addSelectedCard(name);
    } else {
      if (selectedCard[0] === name[0]) {
        setTimeout( () => {
          changeCardState(name, 'delete');
          changeCardState(selectedCard, 'delete');
        }, 500)
      } else {
        setTimeout( () => {
          changeCardState(name, 'close');
          changeCardState(selectedCard, 'close');
        }, 500);
      }
      addSelectedCard(null);
    }
  }

  render() {
    const { name, image, state } = this.props;

    let img;
    let clickable = false;
    if (state[name] === 'open') {
      img = image;
      clickable = false;
    } else if (state[name] === 'close') {
      img = shirt;
      clickable = true;
    }

    return (
      <img src={img}
           className="card"
           alt={name}
           onClick={clickable ? this.imageClick : null}
           style={state[name] === 'delete' ? {height: 0, overflow: 'hidden'} : null } />
    );
  }
}

export default Card;
