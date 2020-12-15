import React from 'react';
import { useDispatch } from 'react-redux';
// @ts-ignore
import { FilePicker } from 'react-file-picker';
import './SplashScreen.css';
import { setCurrentView, setRandomColors } from '../states/app/actions';
import { Views } from '../res/constants.js';
import { setInitialParticipants } from '../states/participants/actions';
import { setInitialPresents } from '../states/presents/actions';
import { generateRandomColors } from '../helpers/random';

function SplashScreen() {
  const dispatch = useDispatch();

  function onGetStartedClick(file: any) {
    readFile(file);
  }

  async function readFile(file: any) {
    const text = await file.text();

    const lines = text.split('\n');

    const participants = lines[0].split(',');
    const presents = lines[1].split(',');

    await dispatch({
      type: setRandomColors,
      payload: generateRandomColors(presents.length),
    });

    await dispatch({
        type: setInitialParticipants,
        payload: participants,
    });

    await dispatch({
      type: setInitialPresents,
      payload: presents,
    });

    await dispatch({
      type: setCurrentView,
      payload: Views.PresentSelect,
    });
  }

  return (
    <div id='splash-screen-container'>
      <h1 id='splash-title'>4th Annual Antec Controls Gift Exchange</h1>
      <FilePicker
        extensions={['txt']}
        onChange={onGetStartedClick}
        onError={() => {}}
      >
        <button>
          Get Started!
        </button>
      </FilePicker>
    </div>
  );
}

export default SplashScreen;
