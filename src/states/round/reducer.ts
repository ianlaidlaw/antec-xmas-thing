import { ActionType } from '../../res/types.js';
import type { ParticipantType } from '../participants/types.js';
import { 
  setActiveParticipant, 
  setStolenPresents, 
  resetStolenPresents, 
  setIsFinalRound,
  setIsRandomizing,
} from './actions';

export type reducerState = {
  activeParticipant: ParticipantType | null,
  stolenPresentIds: string[],
  isFinalRound: boolean,
  isRandomizing: boolean,
};

const initialState = {
  activeParticipant: null,
  stolenPresentIds: [],
  isFinalRound: false,
  isRandomizing: false,
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
        stolenPresentIds: [...state.stolenPresentIds, action.payload],
      };
    }
    case resetStolenPresents: {
      return {
        ...state,
        stolenPresentIds: [],
      };
    }
    case setIsFinalRound: {
      return {
        ...state,
        isFinalRound: true,
      };
    }
    case setIsRandomizing: {
      return {
        ...state,
        isRandomizing: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
