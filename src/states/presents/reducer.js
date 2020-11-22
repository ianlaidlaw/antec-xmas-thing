import { selectPresent } from './actions.js';

const initialState = {
  presents: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case selectPresent: {
      return {
        ...state,
        selectedPresent: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;
