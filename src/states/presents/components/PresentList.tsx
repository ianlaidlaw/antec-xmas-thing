import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Present from './Present';
import './PresentList.css';
import type { ReducerCombinedState } from '../../../reducers';
import { selectPresentThunk } from '../thunks';
import type { PresentType } from '../Types';

export function PresentList() {
  const dispatch = useDispatch();
  const { 
    round: { activeParticipant },
    presents: { availablePresents },
    participants: { completedParticipants },
  } = useSelector((state: ReducerCombinedState) => state);

  function claimPresent(present: PresentType) {
    // start the animation?
    dispatch(selectPresentThunk(activeParticipant, present));
  }

  function renderPresent(present: PresentType, index: number) {
    return (
      <Present
        key={present.id}
        onSelect={claimPresent}
        hideName
        stolen={false}
        present={present}
      />
    );
  }

  let className = '';

  if (!activeParticipant) {
    className += 'disabled';
  }

  return (
    <div id='present-list'>
      <span className='header'> Unopened Gift Card(s):</span>
      <div id='present-list-container' className={className}>
        { availablePresents.map(renderPresent) }
      </div>
    </div>
  );
}

export default PresentList;
