import { setCurrentParticipant } from './actions.js';

const initialState = {
  participants: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setCurrentParticipant: {
      return {
        ...state,
        current: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;
