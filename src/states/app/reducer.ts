import { Views } from '../../res/constants.js';
import { ActionType } from '../../res/types.js';
import { setCurrentView, setRandomColors } from './actions';

export type reducerState = {
  view: string,
  randomColors: string[],
};

const initialState = {
  view: Views.Splash,
  randomColors: [],
};

const reducer = (state: reducerState = initialState, action: ActionType) => {
  switch (action.type) {
    case setCurrentView: {
      return {
        ...state,
        view: action.payload,
      };
    }
    case setRandomColors: {
      return {
        ...state,
        randomColors: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export default reducer;
