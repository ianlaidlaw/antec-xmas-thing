import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Participant from './Participant';
import './ParticipantList.css';
import type { ReducerCombinedState } from '../../../reducers.js';

export function ParticipantList() {
  const { availableParticipants } = useSelector(({participants}: ReducerCombinedState) => participants);
  const { isRandomizing } = useSelector(({round}: ReducerCombinedState) => round);
  const [ glowIndex, setGlowIndex ] = useState<number | undefined | null>(undefined);

  useEffect(() => {
    if (isRandomizing) {
      setGlowIndex(null);
    } else {
      console.log('STOPPING!!!!');
      setGlowIndex(undefined);
    }
  }, [isRandomizing]);

  useEffect(() => {
    if (glowIndex === undefined) {
      console.log('should be done???');
      return;
    } else if (glowIndex === null) {
      setGlowIndex(0);
    } else if (isRandomizing) {
      const newIndex = glowIndex >= availableParticipants.length - 1
        ? 0
        : glowIndex + 1;

      setTimeout(() => {
        setGlowIndex(newIndex);
      }, 50); 
    } else {
      setGlowIndex(undefined);
    }
  }, [glowIndex]);

  function renderParticipant(participant: string, index: number) {
    return (
      <div className='participant-container' key={participant}>
        <Participant
          name={participant}
          isHighlighted={index === glowIndex}
        />
      </div>
    );
  }

  console.log(glowIndex);

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
