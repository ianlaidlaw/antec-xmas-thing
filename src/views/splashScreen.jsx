import React from 'react';
import { useDispatch } from 'react-redux';
import './SplashScreen.css';
import { setCurrentView } from '../states/app/actions.js';
import { Views } from '../res/constants.js'

function SplashScreen() {
  const dispatch = useDispatch();

  function onGetStartedClick() {
    const action = {
      type: setCurrentView,
      payload: Views.PresentSelect,
    };

    dispatch(action);
  }

  return (
    <div id='splash-screen-container'>
      <h1>Antec Controls Secret Santa</h1>
      <span>Made by a cool guy</span>
      <button onClick={onGetStartedClick}>Get Started</button>
    </div>
  );
}

export default SplashScreen;