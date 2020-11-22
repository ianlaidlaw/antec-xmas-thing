import React from 'react';
import Participant from './Participant.jsx';
import './ParticipantList.css';

export function ParticipantList() {
  function getSampleParticipants() {
    return [
      <Participant
        key='momo'
        name='momo'
      />,
      <Participant
        key='terra'
        name='terra'
      />,
      <Participant
        key='misi'
        name='misi'
      />,
    ];
  }

  return (
    <div id='participant-list-container'>
      { getSampleParticipants().map((x) => x) }
    </div>
  )
}

export default ParticipantList;