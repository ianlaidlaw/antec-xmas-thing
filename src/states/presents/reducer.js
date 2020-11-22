import { setInitialPresents, selectPresent } from './actions.js';

const initialState = {
  presents: [],
  availablePresents: [],
  claimedPresents: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setInitialPresents: {
      return {
        ...state,
        presents: [...action.payload],
        availablePresents: [...action.payload],
      };
    }
    case selectPresent: {
      // check if present is stolen or not
      let { availablePresents, claimedPresents } = state;
      let presentName = action.payload;
      let newAvailablePresents = [];
      let newClaimedPresents = [];

      if (availablePresents.includes(presentName)) {
        newAvailablePresents = availablePresents.filter((x) => x !== presentName);
        newClaimedPresents = [...claimedPresents, presentName];
      } else {
        newAvailablePresents = [...availablePresents];
        newClaimedPresents = [...claimedPresents];
      }

      return {
        ...state,
        availablePresents: [...newAvailablePresents],
        claimedPresents: [...newClaimedPresents],
      };
    }
    default:
      return state;
  }
};

export default reducer;
