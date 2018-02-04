import { SET_CARDS, CARDS_STATE } from '../constants/Table.js';

const initialState = {
  cardsArray: [],
  cardsState: {}
}

export default function table(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cardsArray: action.payload };

    case CARDS_STATE:
      return { ...state, cardsState: action.payload };

    default:
      return state;
  }
}
