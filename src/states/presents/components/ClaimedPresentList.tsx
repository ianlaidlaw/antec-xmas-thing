import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Present from './Present';
import './ClaimedPresentList.css';
import { setStolenPresents, setActiveParticipant } from '../../round/actions';
import { setCompletedParticipants } from '../../participants/actions';
import type { ReducerCombinedState } from '../../../reducers';
import type { ParticipantType } from '../../participants/types';
import type { PresentType } from '../Types';

type Props = {
  activeParticipant: ParticipantType | null,
};

function ClaimedPresentList(props: Props) {
  const dispatch = useDispatch();

  const { presents, round, participants } = useSelector((state: ReducerCombinedState) => state);
  const { claimedPresents } = presents;
  const { stolenPresentIds } = round;
  const { completedParticipants } = participants;

  const { activeParticipant } = props;

  function stealPresent(present: PresentType) {
    // get the participant from the stolen present
    const targetParticipant = completedParticipants.find((x: ParticipantType) => x.selectedPresentId === present.id);

    // remove the completed participant that had the present
    const newCompletedParticipants: ParticipantType[] = completedParticipants.filter((x: ParticipantType) => x.selectedPresentId !== present.id);
    newCompletedParticipants.push({
      id: activeParticipant ? activeParticipant.id : '',
      name: activeParticipant ? activeParticipant.name : '',
      selectedPresentId: present.id,
    });

    // complete the active participant
    dispatch({
      type: setCompletedParticipants,
      payload: newCompletedParticipants,
    });

    dispatch({
      type: setActiveParticipant,
      payload: targetParticipant,
    });

    // add to the stolen presents
    dispatch({
      type: setStolenPresents,
      payload: present.id,
    });
  }

  function renderClaimedPresent(present: PresentType) {
    let isStolenThisRound = false;

    if (stolenPresentIds.includes(present.id)) {
      isStolenThisRound = true;
    }

    let className = '';

    if (isStolenThisRound) {
      className = 'disabled';
    }

    const owner = completedParticipants.find((x: ParticipantType) => x.selectedPresentId === present.id);

    // TODO: div not needed?
    return (
      <div key={`claimedPresent-${present.id}`} className={className}>
        <Present
          name={present.name}
          onSelect={stealPresent}
          owner={owner?.name}
          stolen={isStolenThisRound}
          hideName={false}
          present={present}
        />
      </div>
    );
  }

  let className = '';

  if (!activeParticipant) {
    className += 'disabled';
  }

  return (
    <div id='claimed-present-list'>
      <span className='header'>Opened Gift Card(s):</span>
      <div id='claimed-presents-container' className={className}>
        { claimedPresents.map(renderClaimedPresent) }
      </div>
    </div>
  );
}

export default ClaimedPresentList;
