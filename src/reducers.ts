import { createStore, combineReducers } from 'redux';
import app, { reducerState as appReducerState } from './states/app/reducer';
import participants, { reducerState as participantsReducerState } from './states/participants/reducer';
import presents, { reducerState as presentsReducerState } from './states/presents/reducer';
import round, { reducerState as roundReducerState } from './states/round/reducer';

export type ReducerCombinedState = ({
  app: appReducerState,
  participants: participantsReducerState,
  presents: presentsReducerState,
  round: roundReducerState,
});

const reducers = combineReducers({
  app,
  participants,
  presents,
  round,
});

const store = createStore(reducers);

export default store;
