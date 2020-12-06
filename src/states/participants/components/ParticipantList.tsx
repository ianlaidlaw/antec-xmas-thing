import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Participant from './Participant';
import './ParticipantList.css';
import type { ReducerCombinedState } from '../../../reducers.js';

export function ParticipantList() {
  const { availableParticipants } = useSelector(({participants}: ReducerCombinedState) => participants);
  const { isRandomizing } = useSelector(({round}: ReducerCombinedState) => round);
  const [ glowIndex, setGlowIndex ] = useState(null);

  function renderParticipant(participant: string, index: number) {
    return (
      <div className='participant-container'>
        <Participant
          key={participant}
          name={participant}
          isHighlighted={index === glowIndex}
        />
      </div>
    );
  }

  return (
    <div id='participant-list'>
      <h3 className='title'>Remaining Participants</h3>
      <div id='participant-list-container'>
        { availableParticipants.map((x, index) => renderParticipant(x, index)) }
      </div>
    </div>
  );
}

export default ParticipantList;
