import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Participant from './Participant';
import './ParticipantList.css';
import type { ReducerCombinedState } from '../../../reducers.js';
import { selectParticipantThunk } from '../../round/thunks';

export function ParticipantList() {
  const dispatch = useDispatch();
  const { availableParticipants } = useSelector(({participants}: ReducerCombinedState) => participants);
  const { isRandomizing } = useSelector(({round}: ReducerCombinedState) => round);
  const [ state, setState ] = useState<State>({ glowIndex: undefined, randomizationSpeed: 50 });
  const { glowIndex, randomizationSpeed } = state;

  const isFirstRun = useRef(true);

  type State = {
    glowIndex: number | undefined | null;
    randomizationSpeed: number,
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (isRandomizing) {
      setState({
        randomizationSpeed: 50,
        glowIndex: null,
      });
    } else {
      const stoppedIndex = glowIndex || 0;
      console.log(`stopped at: ${availableParticipants[stoppedIndex]}`);

      // dispatch this stopped index to select them
      setTimeout(() => {
        dispatch(selectParticipantThunk(stoppedIndex));
        setState({
          ...state,
          glowIndex: undefined,
        });
      }, 1000);
    }
  }, [isRandomizing]);

  useEffect(() => {
    if (glowIndex === undefined) {
      return;
    } else if (glowIndex === null) {
      setState({
        ...state,
        glowIndex: 0,
      });
    } else if (isRandomizing) {
      const newIndex = glowIndex >= availableParticipants.length - 1
        ? 0
        : glowIndex + 1;
      const newRandomizationSpeed = randomizationSpeed + 10;

      setTimeout(() => {
        setState({
          glowIndex: newIndex,
          randomizationSpeed: newRandomizationSpeed,
        });
      }, randomizationSpeed); 
    }
  }, [glowIndex, isRandomizing]);

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

  return (
    <div id='participant-list'>
      <h3 className='title'>Remaining Participants</h3>
      <div id='participant-list-container'>
        { availableParticipants.map(renderParticipant) }
      </div>
    </div>
  );
}

export default ParticipantList;
