import { ActionType } from '../../res/types.js';
import { 
  setInitialParticipants, 
  setAvailableParticipants,
  setCompletedParticipants,
  setFirstParticipant,
  setFinalRoundParticipants,
} from './actions';
import type { ParticipantType } from './types.js';

export type reducerState = {
  participants: ParticipantType[],
  availableParticipants: ParticipantType[],
  completedParticipants: ParticipantType[],
  firstParticipant: ParticipantType | null,
  finalRoundParticipants: ParticipantType[],
};

const initialState = {
  participants: [],
  availableParticipants: [],
  completedParticipants: [],
  firstParticipant: null,
  finalRoundParticipants: [],
};

const reducer = (state: reducerState = initialState, action: ActionType) => {
  switch (action.type) {
    case setInitialParticipants: {
      return {
        ...state,
        participants: [...action.payload],
        availableParticipants: [...action.payload],
      };
    }
    case setAvailableParticipants: {
      return {
        ...state,
        availableParticipants: [...action.payload],
      };
    }
    case setCompletedParticipants: {
      return {
        ...state,
        completedParticipants: [...action.payload],
      };
    }
    case setFirstParticipant: {
      return {
        ...state,
        firstParticipant: action.payload,
      };
    }
    case setFinalRoundParticipants: {
      return {
        ...state,
        finalRoundParticipants: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export default reducer;
