import React from 'react';
import { useSelector } from 'react-redux';
import Present from './Present.jsx';
import './PresentList.css';

export function PresentList() {
  const { availablePresents } = useSelector((state) => state.presents);

  function renderPresent(present) {
    return (
      <Present
        key={present}
        name={present}
      />
    )
  }

  return (
    <div id='present-list-container'>
      { availablePresents.map((x) => renderPresent(x)) }
    </div>
  )
}

export default PresentList;