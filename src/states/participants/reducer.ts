import { ActionType } from '../../res/types.js';
import { 
  setInitialParticipants, 
  setAvailableParticipants,
  setCompletedParticipants,
  setFirstParticipant,
} from './actions';
import type { CompletedParticipant } from './types.js';

export type reducerState = {
  participants: string[],
  availableParticipants: string[],
  completedParticipants: CompletedParticipant[],
  firstParticipant: null,
};

const initialState = {
  participants: [],
  availableParticipants: [],
  completedParticipants: [],
  firstParticipant: null,
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
    default:
      return state;
  }
};

export default reducer;
