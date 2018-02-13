import { CARDS_STATE } from '../constants/Table.js';

const initialState = {
  cardsState: {}
}

export default function table(state = initialState, action) {
  switch (action.type) {
    case CARDS_STATE:
      return { ...state, cardsState: action.payload };

    default:
      return state;
  }
}
