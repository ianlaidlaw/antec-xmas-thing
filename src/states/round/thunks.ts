import { setAvailableParticipants, setFirstParticipant } from '../../states/participants/actions';
import { resetStolenPresents, setActiveParticipant, setIsFinalRound, setIsRandomizing } from '../../states/round/actions';
import type { ReducerCombinedState } from '../../reducers';

export const startRoundThunk = () => {
  return async (dispatch: Function, getState: Function) => {
      const state: ReducerCombinedState = getState();

      const { firstParticipant, availableParticipants } = state.participants;
      const { presents, claimedPresents } = state.presents;
      const shouldStartFinalRound = presents.length === claimedPresents.length;

      // Find a way to do the randomizing effect
      setTimeout(async() => {
        await dispatch({
          type: setIsRandomizing,
          payload: false,
        });

        // Old Code
        const randomlySelectedParticipant = availableParticipants[
          Math.floor(Math.random() * availableParticipants.length)
        ];

        const newAvailableParticipants = availableParticipants.filter((x) => x !== randomlySelectedParticipant);

        await dispatch({
          type: setAvailableParticipants,
          payload: newAvailableParticipants,
        });

        await dispatch({
          type: setActiveParticipant,
          payload: randomlySelectedParticipant,
        });

        await dispatch({
          type: resetStolenPresents,
        });

        if (!firstParticipant) {
          await dispatch({
            type: setFirstParticipant,
            payload: randomlySelectedParticipant,
          });
        }

        // check to see if its the final round
        if (shouldStartFinalRound) {
          await dispatch({
            type: setIsFinalRound,
          });
        }
      }, 5000);
      
      // Do the randomizing stuff here? set it to true
      await dispatch({
        type: setIsRandomizing,
        payload: true,
      });
  };
};
