import React from 'react';
import Present from './Present.jsx';
import './PresentList.css';

export function PresentList() {
  function getSamplePresents() {
    return [
      <Present
        key='mcdonalds'
        name='mcdonalds'
      />,
      <Present
        key='buger king'
        name='burger king'
      />,
      <Present
        key='wendys'
        name='wendys'
      />,
    ]
  }

  return (
    <div id='present-list-container'>
      { getSamplePresents().map((x) => x) }
    </div>
  )
}

export default PresentList;