import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompletedParticipants } from '../../participants/actions.js';
import { setActiveParticipant } from '../../round/actions.js';
import Present from './Present.jsx';
import './PresentList.css';

export function PresentList(props) {
  const dispatch = useDispatch();
  const { 
    presents:{ availablePresents },
  } = useSelector((state) => state);

  function claimPresent(present) {
    console.log('claim');

    // start the animation?

    dispatch({
      type: setActiveParticipant,
      payload: null,
    });

    dispatch({
      type: setCompletedParticipants,
      payload: 'weee',
    })
  }

  function renderPresent(present) {
    return (
      <Present
        key={present}
        name={present}
        onSelect={claimPresent}
      />
    )
  }

  const { activeParticipant } = props;

  let className = '';

  if (!activeParticipant) {
    className += 'disabled';
  }

  return (
    <div id='present-list-container' className={className}>
      { availablePresents.map((x) => renderPresent(x)) }
    </div>
  )
}

export default PresentList;