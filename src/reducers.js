import { createStore, combineReducers } from 'redux';
import app from './states/app/reducer.js';
import participants from './states/participants/reducer.js';

const reducers = combineReducers({
  app,
  participants,
})

const store = createStore(reducers);

export default store;
