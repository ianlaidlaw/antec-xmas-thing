import { createStore, combineReducers } from 'redux';
import appReducer from './app/reducer.js';

const reducers = combineReducers({
  app: appReducer,
})

const store = createStore(reducers);

export default store;
