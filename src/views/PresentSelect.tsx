import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ParticipantList from '../states/participants/components/ParticipantList';
import ClaimedPresentList from '../states/presents/components/ClaimedPresentList';
import PresentList from '../states/presents/components/PresentList';
import './PresentSelect.css';
import type { ReducerCombinedState } from '../reducers';
import { startRoundThunk } from '../states/round/thunks';

function PresentSelect() {
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerCombinedState) => state);
  const { activeParticipant, isFinalRound } = state.round;
  const { firstParticipant } = state.participants;
  const { presents, claimedPresents } = state.presents;

  const shouldStartFinalRound = presents.length === claimedPresents.length;

  console.log({state});

  function startRound() {
    dispatch(startRoundThunk());
  }

  function renderActiveParticipant() {
    return (
      <span> 
        Active Participant:&nbsp;
        <b>
          { shouldStartFinalRound ? firstParticipant : activeParticipant }
        </b>
      </span>
    );
  }

  function renderContent() {
    if (isFinalRound) {
      return (
        <span>is the final round!!</span>
      );
    }

    return (
      <React.Fragment>
        <button 
          disabled={!!activeParticipant && shouldStartFinalRound} 
          onClick={startRound}
        >
          { shouldStartFinalRound ? 'Start Final Round' : 'Start Round' }
        </button>
        { renderActiveParticipant() }
        <ParticipantList />
        <PresentList 
          activeParticipant={activeParticipant}
        />
        <ClaimedPresentList 
          activeParticipant={activeParticipant}
        />
      </React.Fragment>
    );
  }

  return (
    <div id='present-select-container'>
      <h1>2020 Gift Exchange \O/</h1>
      { renderContent() }
    </div>
  );
}

export default PresentSelect;
