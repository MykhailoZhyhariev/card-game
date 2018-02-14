import { SELECT_CARD, ANIMATION_PROCESS } from '../constants/Card';

const initialState = {
  selectedCard: null,
  animationProcess: null
}

export default function card(state = initialState, action) {
  switch (action.type) {
    case SELECT_CARD:
      return { ...state, selectedCard: action.payload };

    case ANIMATION_PROCESS:
      return { ...state, animationProcess: action.payload };

    default:
      return state;
  }
}
