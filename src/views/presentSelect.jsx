import React from 'react';
import ParticipantList from '../states/participants/components/ParticipantList';
import PresentList from '../states/presents/components/PresentList.jsx';
import './PresentSelect.css';

function PresentSelect() {
  return (
    <div id='present-select-container'>
      <h1>This is the present select screen</h1>
      <ParticipantList />
      <PresentList />
    </div>
  );
}

export default PresentSelect;