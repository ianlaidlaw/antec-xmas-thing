import React, { useReducer } from 'react';
import './App.css';
import { testAction } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import SplashScreen from '../../views/splash';

function App() {
  const appState = useSelector(({app}) => app);
  const dispatch = useDispatch();

  console.log({appState});

  function doThing() {
    dispatch({
      type: testAction,
      payload: 'wewewewew',
    });
  }
  
  return (
    <div className="App">
      <SplashScreen />
    </div>
  );
}

export default App;
