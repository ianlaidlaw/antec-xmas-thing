import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Present from './Present';
import './ClaimedPresentList.css';
import { setStolenPresents, setActiveParticipant } from '../../round/actions';
import { setCompletedParticipants } from '../../participants/actions';
import type { ReducerCombinedState } from '../../../reducers';
import type { CompletedParticipant } from '../../participants/types';

type Props = {
  activeParticipant: string | null,
};

function ClaimedPresentList(props: Props) {
  const dispatch = useDispatch();

  const { presents, round, participants } = useSelector((state: ReducerCombinedState) => state);

  const { claimedPresents } = presents;
  const { stolenPresents } = round;
  const { completedParticipants } = participants;

  const { activeParticipant } = props;

  function stealPresent(present: string) {
    // get the participant from the stolen present
    const targetParticipant = completedParticipants.find((x) => x.selected === present);

    // remove the completed participant that had the present
    const newCompletedParticipants = completedParticipants.filter((x: CompletedParticipant) => x.selected !== present);
    newCompletedParticipants.push({
      name: activeParticipant,
      selected: present
    });

    // complete the active participant
    dispatch({
      type: setCompletedParticipants,
      payload: newCompletedParticipants,
    });

    dispatch({
      type: setActiveParticipant,
      payload: targetParticipant?.name,
    });

    // add to the stolen presents
    dispatch({
      type: setStolenPresents,
      payload: present,
    });
  }

  function renderClaimedPresent(present: string) {
    let isStolenThisRound = false;

    if (stolenPresents.includes(present)) {
      isStolenThisRound = true;
    }

    let className = '';

    if (isStolenThisRound) {
      className = 'disabled';
    }

    const owner = completedParticipants.find((x) => x.selected === present);

    // TODO: div not needed?
    return (
      <div key={`claimedPresent-${present}`} className={className}>
        <Present
          name={present}
          onSelect={stealPresent}
          owner={owner?.name}
          stolen={isStolenThisRound}
          hideName={false}
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
