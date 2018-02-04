import { SET_CARDS, CARDS_STATE } from '../constants/Table.js';

export function setCards(cardsArray) {
  return {
    type: SET_CARDS,
    payload: cardsArray
  }
}

export function setCardsState(cardsState) {
  return {
    type: CARDS_STATE,
    payload: cardsState
  }
}
