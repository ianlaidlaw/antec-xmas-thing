import { ActionType } from '../../res/types.js';
import { 
  setActiveParticipant, 
  setStolenPresents, 
  resetStolenPresents, 
  setIsFinalRound,
} from './actions';

export type reducerState = {
  activeParticipant: string | null,
  stolenPresents: string[],
  isFinalRound: boolean,
};

const initialState = {
  activeParticipant: null,
  stolenPresents: [],
  isFinalRound: false,
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
    case setIsFinalRound: {
      return {
        ...state,
        isFinalRound: true,
      }
    }
    default:
      return state;
  }
};

export default reducer;
