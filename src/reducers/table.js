import { CARDS_STATE, INCREASE_NUMBER_OF_PAIRS, PLAY_AGAIN } from '../constants/Table.js';

const initialState = {
  cardsState: {},
  numberOfPairs: 0,
  clickable: true
}

export default function table(state = initialState, action) {
  switch (action.type) {
    case CARDS_STATE:
      return { ...state, cardsState: action.payload };

    case INCREASE_NUMBER_OF_PAIRS:
      return { ...state, numberOfPairs: action.payload };

    case PLAY_AGAIN:
      return { ...state, clickable: action.payload };

    default:
      return state;
  }
}
