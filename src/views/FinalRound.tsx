import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OpenPresent.css';
import type { ReducerCombinedState } from '../reducers';
import type { ParticipantType } from '../states/participants/types';
import Present from '../states/presents/components/Present';
import { swapPresentThunk } from '../states/presents/thunks';
import { PresentType } from '../states/presents/Types';
import './FinalRound.css';
import { resetStolenPresents, setActiveParticipant, setStolenPresents } from '../states/round/actions';

export function FinalRound() {
  const dispatch = useDispatch();
  const {
    participants: { finalRoundParticipants },
    presents: { presents },
    round: { stolenPresentIds, activeParticipant },
  } = useSelector((state: ReducerCombinedState) => state);

  function onSelect(present: PresentType) {
    dispatch(swapPresentThunk(activeParticipant, present));
  }

  function endGiftExchange() {
    dispatch({
      type: resetStolenPresents,
    });

    dispatch({
      type: setActiveParticipant,
      payload: null,
    });
  }

  function renderFinalRoundPresent(participant: ParticipantType) {
    const present = presents.find((x) => x.id === participant.selectedPresentId) || {id: '', name: '', number: 0, color: ''};
    const presentId = present?.id || '';

    let isStolenThisRound = false;

    if (stolenPresentIds.includes(presentId)) {
      isStolenThisRound = true;
    }

    let className = '';

    if (isStolenThisRound) {
      className = 'disabled';
    }

    return(
      <div key={`finalRoundPresent-${participant.id}-${presentId}`} className={className} onClick={() => onSelect(present)}>
        <Present
          onSelect={() => {}}
          owner={participant.name}
          stolen={isStolenThisRound}
          hideName={false}
          present={present}
          hidePresentName={true}
        />
      </div>
    );
  }

  function renderHeader() {
    let message = 'Thanks for participating!';

    if (activeParticipant) {
      message = 'Final round, whoever picked first has an opportunity to steal anything!';
    }

    return (
      <div id='final-round-header'>
        <span id='final-desc'>{message}</span>
        {
          activeParticipant && <b> 
          Active Participant:&nbsp;&nbsp;
          <span id='active-participant'>
            { activeParticipant?.name }
          </span>
        </b>
        }
      </div>
    );
  }

  let className = '';

  if (!activeParticipant) {
    className = 'disabled';
  }

  return (
    <div id='final-round'>
      {renderHeader()}
      <div id='final-round-content'>
        <div id='final-round-presents-container' className={className}>
          {finalRoundParticipants.map(renderFinalRoundPresent)}
        </div>
        { activeParticipant && <button id='end-exchange-btn' onClick={endGiftExchange}>End Gift Exchange!</button>}
      </div>
    </div>
  );
}

export default FinalRound;
