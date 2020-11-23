import { setActiveParticipant, setStolenPresents, resetStolenPresents } from './actions.js';

const initialState = {
  activeParticipant: null,
  stolenPresents: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setActiveParticipant: {
      return {
        ...state,
        activeParticipant: action.payload,
      };
    }
    case setStolenPresents: {
      return {
        ...state,
        stolenPresents: [...state.stolenPresents, action.payload],
      };
    }
    case resetStolenPresents: {
      return {
        ...state,
        stolenPresents: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
