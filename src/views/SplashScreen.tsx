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
import splash from '../res/img/splash.png';

function SplashScreen() {
  const dispatch = useDispatch();

  function onGetStartedClick(file: any) {
    readFile(file);
  }

  async function readFile(file: any) {
    const text = await file.text();

    const lines = text.split('\n');

    const participantNames = lines[0].split(',').map((x: string) => x.trim());
    const presentNames = lines[1].split(',').map((x: string) => x.trim());

    const participantObjects = initializeParticipants(participantNames);
    const presentObjects = initializePresents(presentNames);

    await dispatch({
      type: setRandomColors,
      payload: generateRandomColors(presentNames.length+1),
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
      
      <h1 className='splash-title'> 4th Annual</h1>
      <h1 className='splash-title'>Antec Controls</h1>
      <h1 className='splash-title'>Gift (Card) Exchange!</h1>

      <FilePicker
        extensions={['txt']}
        onChange={onGetStartedClick}
        onError={() => {}}
      >
        <button id='splash-btn'>
          Get Started!
        </button>
      </FilePicker>
      <img id='splash-img' src={splash} />
    </div>
  );
}

export default SplashScreen;
