import type { ReducerCombinedState } from '../../reducers';
import { Views } from '../../res/constants';
import { setCurrentView } from '../app/actions';
import { setCompletedParticipants } from '../participants/actions';
import type { ParticipantType } from '../participants/types';
import { resetStolenPresents, setActiveParticipant } from '../round/actions';
import { openPresent } from './actions';
import type { PresentType } from './Types';

export const selectPresentThunk = (activeParticipant: ParticipantType | null, present: PresentType) => {
  return async (dispatch: Function, getState: Function) => {
    const { 
      participants: { completedParticipants },
    }: ReducerCombinedState = getState();

    const completedParticipant: ParticipantType = { 
      id: '',
      name: '',
      ...activeParticipant,
      selectedPresentId: present.id,
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
