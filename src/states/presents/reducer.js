import { setInitialPresents, selectPresent } from './actions.js';

const initialState = {
  presents: [],
  availablePresents: [],
  selectedPresent: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setInitialPresents: {
      return {
        ...state,
        presents: [...action.payload],
      };
    }
    case selectPresent: {
      return {
        ...state,
        selectedPresent: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
