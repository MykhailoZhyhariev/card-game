import { combineReducers } from 'redux';
import table from './table';
import card from './card';
import app from './app';

export default combineReducers({
  table,
  card,
  app
})
