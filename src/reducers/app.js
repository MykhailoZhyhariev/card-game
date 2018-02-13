import { GAME_STATE } from '../constants/App';

const initialState = {
  gameState: null
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case GAME_STATE:
      return { ...state, gameState: action.payload };

    default:
      return state;
  }
}
