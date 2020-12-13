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
  
  const isRandomizingRef = useRef(isRandomizing);

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

    isRandomizingRef.current = isRandomizing;

    if (isRandomizingRef.current) {
      setState({
        randomizationSpeed: 10,
        glowIndex: null,
      });
    } else {
      const stoppedIndex = glowIndex || 0;
      // console.log(`stopped at: ${availableParticipants[stoppedIndex]}`);
      // console.log({rRef: isRandomizingRef.current});

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
    } else if (isRandomizingRef.current) {
      const newIndex = glowIndex >= availableParticipants.length - 1
        ? 0
        : glowIndex + 1;
      const newRandomizationSpeed = randomizationSpeed + 5;

      const timeOut = setTimeout(() => {
        // get isRandomizing again?
        // console.log({isRandomizing});
        // console.log({rRef: isRandomizingRef.current});

        if (isRandomizingRef.current) {
          setState({
            glowIndex: newIndex,
            randomizationSpeed: newRandomizationSpeed,
          });
        }
      }, randomizationSpeed);

      // return clearTimeout(timeOut);
    }
  }, [glowIndex]);

  function renderParticipant(participant: string, index: number) {
    return (
      <li key={participant} className='participant-container'>
        <Participant
          name={participant}
          isHighlighted={index === glowIndex}
        />
      </li>
    );
  }

  return (
    <ul id='participant-list-container'>
      { availableParticipants.map(renderParticipant) }
    </ul>
  );
}

export default ParticipantList;
