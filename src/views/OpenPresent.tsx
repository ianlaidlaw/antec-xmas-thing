import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OpenPresent.css';
import type { ReducerCombinedState } from '../reducers';
import mcdonalds from '../res/img/mcdonalds.png';
import { setCurrentView } from '../states/app/actions';
import { openPresent } from '../states/presents/actions';
import { Views } from '../res/constants';


const animations = [
  require('react-reveal/Tada'),
  require('react-reveal/Jump'),
  require('react-reveal/Wobble'),
  require('react-reveal/RubberBand'),
  require('react-reveal/HeadShake'),
  require('react-reveal/Swing'),
];

export function OpenPresent() {
  const dispatch = useDispatch();
  const { presents: { openingPresentIndex } } = useSelector((state: ReducerCombinedState) => state);

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
    const randomIndex = Math.floor(Math.random() * animations.length);
    const RandomAnimationComponent = animations[randomIndex];

    return (
      <RandomAnimationComponent>
        <div id='opening-present'>
          <img className='opening' src={mcdonalds} />
        </div>
      </RandomAnimationComponent>
    );
  }

  function renderDescription() {
    return (
      <span id='description'>Name of the Place - {openingPresentIndex}</span>
    );
  }

  return (
    <div id='open-present'>
      { renderPresent() }
      { renderDescription() }
      <button onClick={onContinueButtonpress}>
        Continue
      </button>
    </div>
  );
}

export default OpenPresent;
