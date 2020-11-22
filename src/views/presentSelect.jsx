import React from 'react';
import { useSelector } from 'react-redux';
import ParticipantList from '../states/participants/components/ParticipantList.jsx';
import PresentList from '../states/presents/components/PresentList.jsx';
import './PresentSelect.css';

function PresentSelect() {
  const state = useSelector(state => state);

  console.log({state});

  function startRound() {
    // choose a player randomly from the available participants
    const availableParticipants = state.participants.availableParticipants;

    const randomlySelectedParticipant = availableParticipants[
      Math.floor(Math.random() * availableParticipants.length)
    ];

    console.log({randomlySelectedParticipant});
  }

  return (
    <div id='present-select-container'>
      <h1>This is the present select screen</h1>
      <ParticipantList />
      <PresentList />
      <button onClick={startRound}>Start Round</button>
    </div>
  );
}

export default PresentSelect;