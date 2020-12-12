import { setAvailableParticipants, setFirstParticipant } from '../../states/participants/actions';
import { resetStolenPresents, setActiveParticipant, setIsFinalRound } from '../../states/round/actions';
import type { ReducerCombinedState } from '../../reducers';

export const startRoundThunk = () => {
  return (dispatch: Function, getState: Function) => {
      const state: ReducerCombinedState = getState();

      const { firstParticipant } = state.participants;
      const { presents, claimedPresents } = state.presents;
      const shouldStartFinalRound = presents.length === claimedPresents.length;

      // choose a player randomly from the available participants
      const availableParticipants = state.participants.availableParticipants;
 
      const randomlySelectedParticipant = availableParticipants[
        Math.floor(Math.random() * availableParticipants.length)
      ];
  
      const newAvailableParticipants = availableParticipants.filter((x) => x !== randomlySelectedParticipant);
      
      dispatch({
        type: setAvailableParticipants,
        payload: newAvailableParticipants,
      });
  
      dispatch({
        type: setActiveParticipant,
        payload: randomlySelectedParticipant,
      });
  
      dispatch({
        type: resetStolenPresents,
      });
  
      if (!firstParticipant) {
        dispatch({
          type: setFirstParticipant,
          payload: randomlySelectedParticipant,
        });
      }
  
      // check to see if its the final round
      if (shouldStartFinalRound) {
        dispatch({
          type: setIsFinalRound,
        });
      }

      console.log({dispatch, state: getState()});
  }
}
