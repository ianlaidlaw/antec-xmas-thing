import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Present from './Present.jsx';
import './ClaimedPresentList.css';
import { setStolenPresents } from '../../round/actions.js';

function ClaimedPresentList() {
  const dispatch = useDispatch();
  const { claimedPresents } = useSelector((state) => state.presents);
  const { stolenPresents } = useSelector((state) => state.round);

  function stealPresent(present) {
    dispatch({
      type: setStolenPresents,
      payload: present,
    });
  }

  function renderClaimedPresent(present) {
    console.log({stolenPresents});

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