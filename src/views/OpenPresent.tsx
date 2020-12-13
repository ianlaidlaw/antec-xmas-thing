import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OpenPresent.css';
import type { ReducerCombinedState } from '../reducers';
import mcdonalds from '../res/img/mcdonalds.png';
import { setCurrentView } from '../states/app/actions';
import { openPresent } from '../states/presents/actions';
import { Views } from '../res/constants';

export function OpenPresent() {
  const dispatch = useDispatch();
  const { presents: { openingPresent } } = useSelector((state: ReducerCombinedState) => state);

  function onContinueButtonpress() {
    dispatch({
      type: setCurrentView,
      payload: Views.PresentSelect,
    });

    dispatch({
      type: openPresent,
      payload: null,
    });
  }

  function renderPresent() {
    return (
      <div id='opening-present'>
        <img className='opening' src={mcdonalds} />
      </div>
    );
  }

  return (
    <div id='open-present'>
      { renderPresent() }
      <button onClick={onContinueButtonpress}>
        Continue
      </button>
    </div>
  );
}

export default OpenPresent;
