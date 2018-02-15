import { combineReducers } from 'redux';
import table from './table';
import card from './card';
import app from './app';

const appReducer = combineReducers({
  table,
  card,
  app
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined
  }

  return appReducer(state, action);
}

export default rootReducer;
