import { SELECT_CARD, ANIMATION_PROCESS } from '../constants/Card';

export function selectCards(selectedCard) {
  return {
    type: SELECT_CARD,
    payload: selectedCard
  }
}

export function setAnimationProcess(animationProcess) {
  return {
    type: ANIMATION_PROCESS,
    payload: animationProcess
  }
}
