import { GAME_STATE, SCORE } from '../constants/App';

export function changeGameState(gameState) {
  return {
    type: GAME_STATE,
    payload: gameState
  }
}

export function changeScore(score) {
  return {
    type: SCORE,
    payload: score
  }
}

export function resetStore() {
  return {
    type: 'RESET_STORE'
  }
}
