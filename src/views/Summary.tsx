import React from 'react';
import { useSelector } from 'react-redux';
import './OpenPresent.css';
import type { ReducerCombinedState } from '../reducers';

function Summary() {
  const {
    app: { randomColors },
    presents: { openingPresent },
  } = useSelector((state: ReducerCombinedState) => state);

  return (
    <div>
      summary
    </div>
  );
}

export default Summary;
