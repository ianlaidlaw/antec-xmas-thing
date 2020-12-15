import { setAvailableParticipants, setFirstParticipant } from '../../states/participants/actions';
import { resetStolenPresents, setActiveParticipant, setIsFinalRound, setIsRandomizing, setStolenPresents } from '../../states/round/actions';
import type { ReducerCombinedState } from '../../reducers';
import { getRandomRouletteDuration } from '../../helpers/random';

export const startRoundThunk = () => {
  return async (dispatch: Function, getState: Function) => {
    const state: ReducerCombinedState = getState();
    const { availableParticipants } = state.participants;

    if (availableParticipants.length === 1) {
      await dispatch({
        type: resetStolenPresents,
      });

      await dispatch({
        type: setActiveParticipant,
        payload: availableParticipants[0],
      });

      await dispatch({
        type: setAvailableParticipants,
        payload: [],
      });

      return;
    }

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
  return async (dispatch: Function, getState: Function) => {
    const { participants: { firstParticipant, completedParticipants } }: ReducerCombinedState = getState();
    const firsParticipantWithSelectedPresentId = completedParticipants.find((x) => x.id === firstParticipant?.id);

    await dispatch({
      type: resetStolenPresents,
    });

    await dispatch({
      type: setStolenPresents,
      payload: firsParticipantWithSelectedPresentId?.selectedPresentId,
    })

    await dispatch({
      type: setIsFinalRound,
    });

    await dispatch({
      type: setActiveParticipant,
      payload: firsParticipantWithSelectedPresentId,
    });
  };
};

export const selectParticipantThunk = (index: number) => {
  return async (dispatch: Function, getState: Function) => {
    const state: ReducerCombinedState = getState();
    const { firstParticipant, availableParticipants } = state.participants;
    const { presents, claimedPresents } = state.presents;

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
