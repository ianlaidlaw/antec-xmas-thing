import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAvailableParticipants } from '../states/participants/actions.js';
import ParticipantList from '../states/participants/components/ParticipantList.jsx';
import ClaimedPresentList from '../states/presents/components/ClaimedPresentList.jsx';
import PresentList from '../states/presents/components/PresentList.tsx';
import { resetStolenPresents, setActiveParticipant } from '../states/round/actions.js';
import './PresentSelect.css';

function PresentSelect() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { activeParticipant } = state.round;

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
  }

  function renderActiveParticipant() {
    return (
      <span> Active Participant: <b>{activeParticipant}</b></span>
    );
  }

  return (
    <div id='present-select-container'>
      <h1>2020 Gift Exchange \O/</h1>
      <button disabled={!!activeParticipant} onClick={startRound}>Start Round</button>
      { renderActiveParticipant() }
      <ParticipantList 
        activeParticipant={activeParticipant}
      />
      <PresentList 
        activeParticipant={activeParticipant}
      />
      <ClaimedPresentList 
        activeParticipant={activeParticipant}
      />
    </div>
  );
}

export default PresentSelect;