import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompletedParticipants } from '../../participants/actions.js';
import { resetStolenPresents, setActiveParticipant } from '../../round/actions.js';
import Present from './Present';
import './PresentList.css';
import type { reducerState } from '../../../reducers';

type Props = {
  activeParticipant: string,
};

export function PresentList(props: Props) {
  const dispatch = useDispatch();
  const { 
    presents: { availablePresents },
    participants: { completedParticipants },
  } = useSelector((state: reducerState) => state);

  const { activeParticipant } = props;

  function claimPresent(present: string) {
    // start the animation?

    const completedParticipant = {
      name: activeParticipant,
      selected: present,
    };

    dispatch({
      type: setActiveParticipant,
      payload: null,
    });

    dispatch({
      type: setCompletedParticipants,
      payload: [...completedParticipants, completedParticipant],
    });

    dispatch({
      type: resetStolenPresents,
    });
  }

  function renderPresent(present: string) {
    return (
      <Present
        key={present}
        name={present}
        onSelect={claimPresent}
        hideName
      />
    );
  }

  let className = '';

  if (!activeParticipant) {
    className += 'disabled';
  }

  return (
    <div>
      <h3>Available Presents</h3>
      <div id='present-list-container' className={className}>
        { availablePresents.map(renderPresent) }
      </div>
    </div>
  );
}

export default PresentList;