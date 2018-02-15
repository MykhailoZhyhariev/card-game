import { SELECT_CARD, ANIMATION } from '../constants/Card';

export function selectCards(selectedCard) {
  return {
    type: SELECT_CARD,
    payload: selectedCard
  }
}

export function setAnimationState(animationState) {
  return {
    type: ANIMATION,
    payload: animationState
  }
}
