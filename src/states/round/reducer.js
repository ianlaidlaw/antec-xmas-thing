import { setActiveParticipant, setStolenPresents } from './actions.js';

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
        stolenPresents: [],
      };
    }
    case setStolenPresents: {
      return {
        ...state,
        stolenPresents: [...state.stolenPresents, action.payload],
      }
    }
    default:
      return state;
  }
};

export default reducer;
