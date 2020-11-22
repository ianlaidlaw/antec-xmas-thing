import React from 'react';
import { useSelector } from 'react-redux';
import Present from './Present.jsx';
import './ClaimedPresentList.css';

function ClaimedPresentList() {
  const { claimedPresents } = useSelector((state) => state.presents);

  function renderClaimedPresent(present) {
    return (
      <div key={`claimedPresent-${present}`}>
        <Present
          name={present}
        />
      </div>
    )
  }

  return (
    <div id='claimed-presents-container'>
      { claimedPresents.map(renderClaimedPresent) }
    </div>
  );
}

export default ClaimedPresentList;