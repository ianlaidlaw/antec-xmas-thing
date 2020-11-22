import { createStore, combineReducers } from 'redux';
import app from './states/app/reducer.js';
import participants from './states/participants/reducer.js';
import presents from './states/presents/reducer.js';
import round from './states/round/reducer.js';

const reducers = combineReducers({
  app,
  participants,
  presents,
  round,
});

const store = createStore(reducers);

export default store;
