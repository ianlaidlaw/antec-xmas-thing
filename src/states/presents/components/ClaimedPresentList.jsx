import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Present from './Present.jsx';
import './ClaimedPresentList.css';
import { setStolenPresents } from '../../round/actions.js';

function ClaimedPresentList(props) {
  const dispatch = useDispatch();
  const { claimedPresents } = useSelector((state) => state.presents);
  const { stolenPresents } = useSelector((state) => state.round);
  const { completedParticipants } = useSelector((state) => state.participants);

  const { activeParticipant } = props;

  function stealPresent(present) {
    // get the participant from the stolen present
    const targetParticipant = completedParticipants.find((x) => x.selected === present);

  console.log(targetParticipant);


    // remove the completed participant that

    // complete the active participant

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

    // TODO: div not needed
    return (
      <div key={`claimedPresent-${present}`}>
        <Present
          name={present}
          onSelect={stealPresent}
        />
        { isStolenThisRound && <span>STOLEN!</span> }
      </div>
    )
  }

  return (
    <div id='claimed-presents-container'>
      { claimedPresents.map(renderClaimedPresent) }
    </div>
  );
}

export default ClaimedPresentList;