import type { ReducerCombinedState } from '../../reducers';
import { Views } from '../../res/constants';
import { setCurrentView } from '../app/actions';
import { setCompletedParticipants } from '../participants/actions';
import { resetStolenPresents, setActiveParticipant } from '../round/actions';
import { openPresent } from './actions';

export const selectPresentThunk = (activeParticipant: string | null, present: string) => {
  return async (dispatch: Function, getState: Function) => {
    const { 
      participants: { completedParticipants },
    }: ReducerCombinedState = getState();

    const completedParticipant = {
      name: activeParticipant,
      selected: present,
    };

    await dispatch({
      type: setCurrentView,
      payload: Views.OpenPresent,
    });

    await dispatch({
      type: openPresent,
      payload: present,
    });

    dispatch({
      type: setActiveParticipant,
      payload: null,
    });

    dispatch({
      type: setCompletedParticipants,
      payload: [...completedParticipants, completedParticipant],
    });

    dispatch({
      type: resetStolenPresents,
    });
  };
};
