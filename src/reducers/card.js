import { SELECT_CARD } from '../constants/Card';

const initialState = {
  selectedCards: null,
}

export default function card(state = initialState, action) {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selectedCards: action.payload };

    default:
      return state;
  }
}
