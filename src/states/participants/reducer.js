import { 
  setInitialParticipants, 
  setCurrentParticipant,
  setAvailableParticipants,
  setCompletedParticipants,
} from './actions.js';

const initialState = {
  participants: [],
  availableParticipants: [],
  completedParticipants: [],
  current: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setInitialParticipants: {
      return {
        ...state,
        participants: [...action.payload],
        availableParticipants: [...action.payload],
      };
    }
    case setCurrentParticipant: {
      return {
        ...state,
        current: action.payload,
      };
    }
    case setAvailableParticipants: {
      return {
        ...state,
        availableParticipants: [...state.availableParticipants],
      }
    }
    case setCompletedParticipants: {
      return {
        ...state,
        completedParticipants: [...state.completedParticipants, action.payload],
      }
    }
    default:
      return state;
  }
};

export default reducer;
