import { SELECT_CARD } from '../constants/Card';

const initialState = {
  selectedCard: null,
}

export default function card(state = initialState, action) {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selectedCard: action.payload };

    default:
      return state;
  }
}
