import { Views } from '../../res/constants.js';
import { ActionType } from '../../res/types.js';
import { setCurrentView } from './actions';

export type reducerState = {
  view: string,
};

const initialState = {
  view: Views.Splash,
};

const reducer = (state: reducerState = initialState, action: ActionType) => {
  switch (action.type) {
    case setCurrentView: {
      return {
        ...state,
        view: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
