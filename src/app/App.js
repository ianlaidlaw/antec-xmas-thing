import React, { useReducer } from 'react';
import './App.css';
import appReducer, { testAction } from './reducer.js';
import Name from '../components/name.js';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const appState = useSelector(state => state.app);
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
      <Name/>

      my app
      <button onClick={doThing}>click meeee</button>
      
    </div>
  );
}

export default App;
