import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Present from './Present.tsx';
import './ClaimedPresentList.css';
import { setStolenPresents, setActiveParticipant } from '../../round/actions.js';
import { setCompletedParticipants } from '../../participants/actions.js';

function ClaimedPresentList(props) {
  const dispatch = useDispatch();
  const { claimedPresents } = useSelector((state) => state.presents);
  const { stolenPresents } = useSelector((state) => state.round);
  const { completedParticipants } = useSelector((state) => state.participants);

  const { activeParticipant } = props;

  function stealPresent(present) {
    // get the participant from the stolen present
    const targetParticipant = completedParticipants.find((x) => x.selected === present);

    // remove the completed participant that had the present
    const newCompletedParticipants = completedParticipants.filter((x) => x.selected !== present);
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
      payload: targetParticipant.name,
    });

    // add to the stolen presents
    dispatch({
      type: setStolenPresents,
      payload: present,
    });
  }

  function renderClaimedPresent(present) {
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
          owner={owner.name}
          stolen={isStolenThisRound}
        />
      </div>
    );
  }

  let className = '';

  if (!activeParticipant) {
    className += 'disabled';
  }

  return (
    <div>
      <h3>Claimed Presents</h3>
      <div id='claimed-presents-container' className={className}>
        { claimedPresents.map(renderClaimedPresent) }
      </div>
    </div>
  );
}

export default ClaimedPresentList;