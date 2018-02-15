import { SELECT_CARD, ANIMATION } from '../constants/Card';

const initialState = {
  selectedCard: null,
  animationState: null
}

export default function card(state = initialState, action) {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selectedCard: action.payload };

    case ANIMATION:
      return { ...state, animationState: action.payload };

    default:
      return state;
  }
}
