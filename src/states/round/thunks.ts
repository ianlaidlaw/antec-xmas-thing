import { setAvailableParticipants, setFirstParticipant } from '../../states/participants/actions';
import { resetStolenPresents, setActiveParticipant, setIsFinalRound, setIsRandomizing } from '../../states/round/actions';
import type { ReducerCombinedState } from '../../reducers';
import { getRandomRouletteDuration } from '../../helpers/random';

export const startRoundThunk = () => {
  return async (dispatch: Function) => {
      setTimeout(async() => {
        await dispatch({
          type: setIsRandomizing,
          payload: false,
        });
      }, getRandomRouletteDuration());

      await dispatch({
        type: resetStolenPresents,
      });
      
      await dispatch({
        type: setIsRandomizing,
        payload: true,
      });

      await dispatch({
        type: setActiveParticipant,
        payload: null,
      });
  };
};

export const startFinalRoundThunk = () => {
  return async (dispatch: Function) => {
    await dispatch({
      type: resetStolenPresents,
    });

    await dispatch({
      type: setIsFinalRound,
    });
  };
};

export const selectParticipantThunk = (index: number) => {
  return async (dispatch: Function, getState: Function) => {
    const state: ReducerCombinedState = getState();
    const { firstParticipant, availableParticipants } = state.participants;
    const { presents, claimedPresents } = state.presents;
    const shouldStartFinalRound = presents.length === claimedPresents.length;

    const randomlySelectedParticipant = availableParticipants[index];
    const newAvailableParticipants = availableParticipants.filter((x) => x.id !== randomlySelectedParticipant.id);

    await dispatch({
      type: setAvailableParticipants,
      payload: newAvailableParticipants,
    });

    await dispatch({
      type: setActiveParticipant,
      payload: randomlySelectedParticipant,
    });

    if (!firstParticipant) {
      await dispatch({
        type: setFirstParticipant,
        payload: randomlySelectedParticipant,
      });
    }
  };
};
