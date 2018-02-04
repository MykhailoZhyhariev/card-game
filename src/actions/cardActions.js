import { SELECT_CARD } from '../constants/Card';

export function selectCards(selectedCards) {
  return {
    type: SELECT_CARD,
    payload: selectedCards
  }
}
