import React from 'react';
import { useSelector } from 'react-redux';
import Present from './Present.jsx';
import './PresentList.css';

export function PresentList(props) {
  const { availablePresents } = useSelector((state) => state.presents);

  function renderPresent(present) {
    return (
      <Present
        key={present}
        name={present}
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