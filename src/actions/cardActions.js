import { SELECT_CARD } from '../constants/Card';

export function selectCards(selectedCard) {
  return {
    type: SELECT_CARD,
    payload: selectedCard
  }
}
