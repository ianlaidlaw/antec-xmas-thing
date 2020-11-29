import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAvailableParticipants, setFirstParticipant } from '../states/participants/actions';
import ParticipantList from '../states/participants/components/ParticipantList';
import ClaimedPresentList from '../states/presents/components/ClaimedPresentList';
import PresentList from '../states/presents/components/PresentList';
import { resetStolenPresents, setActiveParticipant, setIsFinalRound } from '../states/round/actions';
import './PresentSelect.css';
import type { ReducerCombinedState } from '../reducers';

function PresentSelect() {
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerCombinedState) => state);
  const { activeParticipant, isFinalRound } = state.round;
  const { firstParticipant } = state.participants;
  const { presents, claimedPresents } = state.presents;

  const shouldStartFinalRound = presents.length === claimedPresents.length;

  console.log({state});

  function startRound() {
    // choose a player randomly from the available participants
    const availableParticipants = state.participants.availableParticipants;

    const randomlySelectedParticipant = availableParticipants[
      Math.floor(Math.random() * availableParticipants.length)
    ];

    const newAvailableParticipants = availableParticipants.filter((x) => x !== randomlySelectedParticipant);
    
    dispatch({
      type: setAvailableParticipants,
      payload: newAvailableParticipants,
    });

    dispatch({
      type: setActiveParticipant,
      payload: randomlySelectedParticipant,
    });

    dispatch({
      type: resetStolenPresents,
    });

    if (!firstParticipant) {
      dispatch({
        type: setFirstParticipant,
        payload: randomlySelectedParticipant,
      });
    }

    // check to see if its the final round
    if (shouldStartFinalRound) {
      dispatch({
        type: setIsFinalRound,
      });
    }
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
