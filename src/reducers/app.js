import { GAME_STATE, SCORE } from '../constants/App';

const initialState = {
  gameState: null,
  score: 0
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case GAME_STATE:
      return { ...state, gameState: action.payload };

    case SCORE:
      return { ...state, score: action.payload };

    default:
      return state;
  }
}
