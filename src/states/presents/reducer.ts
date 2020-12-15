import { ActionType } from '../../res/types.js';
import { setInitialPresents, selectPresent, openPresent } from './actions';
import type { PresentType } from './Types';

export type reducerState = {
  presents: PresentType[],
  availablePresents: PresentType[],
  claimedPresents: PresentType[],
  openingPresent: PresentType | null,
};

const initialState = {
  presents: [],
  availablePresents: [],
  claimedPresents: [],
  openingPresent: null,
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

      const present = action.payload;

      let presentId = present.id;
      let newAvailablePresents = [];
      let newClaimedPresents = [];

      if (availablePresents.some((x) => x.id === presentId)) {
        newAvailablePresents = availablePresents.filter((x) => x.id !== presentId);
        newClaimedPresents = [...claimedPresents, action.payload];
      } else {
        newAvailablePresents = [...availablePresents];
        newClaimedPresents = [...claimedPresents];
      }

      return {
        ...state,
        availablePresents: [...newAvailablePresents],
        claimedPresents: [...newClaimedPresents],
        openingPresent: present,
      };
    };
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
