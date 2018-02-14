import { CARDS_STATE, INCREASE_NUMBER_OF_PAIRS } from '../constants/Table.js';

export function setCardsState(cardsState) {
  return {
    type: CARDS_STATE,
    payload: cardsState
  }
}

export function increaseNumberOfPairs(numberOfPairs) {
  return {
    type: INCREASE_NUMBER_OF_PAIRS,
    payload: numberOfPairs
  }
}
