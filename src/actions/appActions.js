import { GAME_STATE } from '../constants/App';

export function changeGameState(gameState) {
  return {
    type: GAME_STATE,
    payload: gameState
  }
}
