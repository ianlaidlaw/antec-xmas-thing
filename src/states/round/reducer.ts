import { ActionType } from '../../res/types.js';
import { 
  setActiveParticipant, 
  setStolenPresents, 
  resetStolenPresents 
} from './actions.js';

export type reducerState = {
  activeParticipant: string | null,
  stolenPresents: string[],
};

const initialState = {
  activeParticipant: null,
  stolenPresents: [],
};

const reducer = (state: reducerState = initialState, action: ActionType) => {
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
