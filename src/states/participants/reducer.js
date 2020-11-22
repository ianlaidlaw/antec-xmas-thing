import { 
  setInitialParticipants, 
  setAvailableParticipants,
  setCompletedParticipants,
} from './actions.js';

const initialState = {
  participants: [],
  availableParticipants: [],
  completedParticipants: [],
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
    case setAvailableParticipants: {
      return {
        ...state,
        availableParticipants: [...action.payload],
      };
    }
    case setCompletedParticipants: {
      return {
        ...state,
        completedParticipants: [...state.completedParticipants, action.payload],
      };
    }
    default:
      return state;
  }
};

export default reducer;
