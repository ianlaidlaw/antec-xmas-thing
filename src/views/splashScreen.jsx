import React from 'react';
import { useDispatch } from 'react-redux';
import { FilePicker } from 'react-file-picker';
import './SplashScreen.css';
import { setCurrentView } from '../states/app/actions.js';
import { Views } from '../res/constants.js';
import { setInitialParticipants } from '../states/participants/actions';
import { setInitialPresents } from '../states/presents/actions';

function SplashScreen() {
  const dispatch = useDispatch();

  function onGetStartedClick(file) {
    readFile(file);

    const action = {
      type: setCurrentView,
      payload: Views.PresentSelect,
    };

    dispatch(action);
  }

  async function readFile(file) {
    const text = await file.text();

    const lines = text.split('\n');

    const participants = lines[0].split(',');
    const presents = lines[1].split(',');

    dispatch({
        type: setInitialParticipants,
        payload: participants,
    });

    dispatch({
      type: setInitialPresents,
      payload: presents,
    });
  }

  return (
    <div id='splash-screen-container'>
      <h1>Antec Controls Secret Santa</h1>
      <span>Made by a cool guy</span>
        <FilePicker
          extensions={['txt']}
          onChange={onGetStartedClick}
          onError={() => {}}
        >
          <button>
            Get Started
          </button>
        </FilePicker>
    </div>
  );
}

export default SplashScreen;