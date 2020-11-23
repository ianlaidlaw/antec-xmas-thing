import { Views } from '../../res/constants.js';
import { setCurrentView } from './actions.js';

const initialState = {
  view: Views.Splash,
};

const reducer = (state = initialState, action) => {
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
