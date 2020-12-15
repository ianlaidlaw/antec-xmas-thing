import { ActionType } from '../../res/types.js';
import { setInitialPresents, selectPresent, openPresent } from './actions';

export type reducerState = {
  presents: string[],
  availablePresents: string[],
  claimedPresents: string[],
  openingPresent: string | null,
  openingPresentIndex: number | null,
};

const initialState = {
  presents: [],
  availablePresents: [],
  claimedPresents: [],
  openingPresent: null,
  openingPresentIndex: null,
};

const reducer = (state: reducerState = initialState, action: ActionType) => {
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
      let presentName = action.payload.name;
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
        openingPresentIndex: action.payload.index,
      };
    }
    case openPresent: {
      return {
        ...state,
        openingPresent: action.payload,
      };
    };
    default:
      return state;
  };
};

export default reducer;
