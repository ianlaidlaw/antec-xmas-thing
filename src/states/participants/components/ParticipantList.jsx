import React from 'react';
import { useSelector } from 'react-redux';
import Participant from './Participant.jsx';
import './ParticipantList.css';

export function ParticipantList() {
  const { availableParticipants } = useSelector((state) => state.participants);

  function renderParticipant(participant) {
    return (
      <Participant
        key={participant}
        name={participant}
      />
    );
  }

  return (
    <div id='participant-list-container'>
      { availableParticipants.map((x) => renderParticipant(x)) }
    </div>
  )
}

export default ParticipantList;