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
import { initializePresents, initializeParticipants } from '../helpers/init';

function SplashScreen() {
  const dispatch = useDispatch();

  function onGetStartedClick(file: any) {
    readFile(file);
  }

  async function readFile(file: any) {
    const text = await file.text();

    const lines = text.split('\n');

    const participantNames = lines[0].split(',');
    const presentNames = lines[1].split(',');

    const participantObjects = initializeParticipants(participantNames);
    const presentObjects = initializePresents(presentNames);

    await dispatch({
      type: setRandomColors,
      payload: generateRandomColors(presentNames.length),
    });

    await dispatch({
        type: setInitialParticipants,
        payload: participantObjects,
    });

    await dispatch({
      type: setInitialPresents,
      payload: presentObjects,
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
