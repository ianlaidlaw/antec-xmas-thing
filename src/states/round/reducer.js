import { setActiveParticipant } from './actions.js';

const initialState = {
  activeParticipant: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setActiveParticipant: {
      return {
        ...state,
        activeParticipant: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
