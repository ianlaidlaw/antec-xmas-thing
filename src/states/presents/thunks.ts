import type { ReducerCombinedState } from '../../reducers';
import { Views } from '../../res/constants';
import { setCurrentView } from '../app/actions';
import { setCompletedParticipants, setFinalRoundParticipants } from '../participants/actions';
import type { ParticipantType } from '../participants/types';
import { resetStolenPresents, setActiveParticipant, setStolenPresents } from '../round/actions';
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

export const swapPresentThunk = (activeParticipant: ParticipantType | null, targetPresent: PresentType) => {
  return async (dispatch: Function, getState: Function) => {
    const { 
      participants: { finalRoundParticipants },
    }: ReducerCombinedState = getState();

    // At this point everyone will have a present
    // find target participant by doing a lookup of presentId in finalRoundParticipants
    // set that presentId as stolen this round
  
  
    const stealerPresentId = activeParticipant?.selectedPresentId;

    const targetPresentId = targetPresent.id;
    const targetParticipant = finalRoundParticipants.find((x) => x.selectedPresentId === targetPresentId);

    // TODO: dunno if this works
    const finalRoundParticipantsWithoutActives = finalRoundParticipants.filter(
      (x) => x.id !== activeParticipant?.id && x.id !== targetParticipant?.id
    );

    console.log({finalRoundParticipantsWithoutActives});

    // add the stealer in
    finalRoundParticipantsWithoutActives.push({
      id: activeParticipant?.id || '',
      name: activeParticipant?.name || '',
      selectedPresentId: targetPresentId,
    });

    // add the target in
    finalRoundParticipantsWithoutActives.push({
      id: targetParticipant?.id || '',
      name: targetParticipant?.name || '',
      selectedPresentId: stealerPresentId || '',
    });

    dispatch({
      type: setStolenPresents,
      payload: targetPresentId,
    });

    dispatch({
      type: setActiveParticipant,
      payload: {
        id: targetParticipant?.id || '',
        name: targetParticipant?.name || '',
        selectedPresentId: stealerPresentId || '',
      },
    });

    dispatch({
      type: setFinalRoundParticipants,
      payload: finalRoundParticipantsWithoutActives,
    });
  };
};
