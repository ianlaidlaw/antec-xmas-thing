import { ActionType } from '../../res/types.js';
import { 
  setInitialParticipants, 
  setAvailableParticipants,
  setCompletedParticipants,
} from './actions';
import type { CompletedParticipant } from './types.js';

export type reducerState = {
  participants: string[],
  availableParticipants: string[],
  completedParticipants: CompletedParticipant[],
};

const initialState = {
  participants: [],
  availableParticipants: [],
  completedParticipants: [],
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
    default:
      return state;
  }
};

export default reducer;
