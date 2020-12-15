import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OpenPresent.css';
import type { ReducerCombinedState } from '../reducers';
import mcdonalds from '../res/img/mcdonalds.png';
import { setCurrentView } from '../states/app/actions';
import { ImageKeys, Views } from '../res/constants';
import { getImage } from '../helpers/image';

const animations = [
  require('react-reveal/Tada'),
  require('react-reveal/Jump'),
  require('react-reveal/Wobble'),
  require('react-reveal/RubberBand'),
  require('react-reveal/HeadShake'),
  require('react-reveal/Swing'),
];

export function OpenPresent() {
  const [ flipPresent, setFlipPresent ] = useState(false);

  setTimeout(() => {
    setFlipPresent(true);
  }, 2000);

  const dispatch = useDispatch();
  const {
    app: { randomColors },
    presents: { openingPresent },
  } = useSelector((state: ReducerCombinedState) => state);

  function onContinueButtonPress() {
    dispatch({
      type: setCurrentView,
      payload: Views.PresentSelect,
    });
  }

  function renderUnopened() {
    if (flipPresent) {
      return null;
    }

    const index = openingPresent?.number || 1;
    const randomColor = randomColors[index];

    return (
      <div className='opening' style={{backgroundColor: randomColor}}>
        <span className='present-number'>{index}</span>
      </div>
    );
  }

  function renderOpened() {
    if (!flipPresent) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * animations.length);
    const RandomAnimationComponent = animations[randomIndex];

    return (
      <RandomAnimationComponent>
        <img className='opening' src={getImage(ImageKeys.Amazon)} />
      </RandomAnimationComponent>
    );
  }

  function renderDescription() {
    const desctiption = flipPresent
      ? openingPresent?.name
      : 'Opening...';

    return (
      <span id='description'>{desctiption}</span>
    );
  }

  return (
    <div id='open-present'>
      <div id='opening-present'>
        { renderUnopened() }
        { renderOpened() }
      </div>
      { renderDescription() }
      <button id='open-present-btn' disabled={!flipPresent} onClick={onContinueButtonPress}>
        Continue
      </button>
    </div>
  );
}

export default OpenPresent;
