import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompletedParticipants } from '../../participants/actions';
import { resetStolenPresents, setActiveParticipant } from '../../round/actions';
import Present from './Present';
import './PresentList.css';
import type { ReducerCombinedState } from '../../../reducers';
import { selectPresentThunk } from '../thunks';

type Props = {
  activeParticipant: string | null,
};

export function PresentList(props: Props) {
  const dispatch = useDispatch();
  const { 
    presents: { availablePresents },
    participants: { completedParticipants },
  } = useSelector((state: ReducerCombinedState) => state);

  const { activeParticipant } = props;

  function claimPresent(present: string) {
    // start the animation?
    dispatch(selectPresentThunk(activeParticipant, present));
  }

  function renderPresent(present: string) {
    return (
      <Present
        key={present}
        name={present}
        onSelect={claimPresent}
        hideName
        stolen={false}
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
