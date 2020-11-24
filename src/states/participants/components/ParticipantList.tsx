import React from 'react';
import { useSelector } from 'react-redux';
import Participant from './Participant';
import './ParticipantList.css';
import type { ReducerCombinedState } from '../../../reducers.js';

export function ParticipantList() {
  const { availableParticipants } = useSelector(({participants}: ReducerCombinedState) => participants);

  function renderParticipant(participant: string) {
    return (
      <Participant
        key={participant}
        name={participant}
      />
    );
  }

  return (
    <div>
      <h3>Remaining Participants</h3>
      <div id='participant-list-container'>
        { availableParticipants.map(renderParticipant) }
      </div>
    </div>
  );
}

export default ParticipantList;
