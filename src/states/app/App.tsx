import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import SplashScreen from '../../views/SplashScreen';
import PresentSelect from '../../views/PresentSelect';
import OpenPresent from '../../views/OpenPresent';
import FinalRound from '../../views/FinalRound';
import Summary from '../../views/Summary';
import { Views } from '../../res/constants';
import type { ReducerCombinedState } from '../../reducers';

function App() {
  const { view } = useSelector(({app}: ReducerCombinedState) => app);

  function renderMainView() {
    switch(view) {
      case Views.PresentSelect:
        return <PresentSelect />;
      case Views.OpenPresent:
        return <OpenPresent />;
      case Views.Summary:
        return <Summary />;
      case Views.FinalRound:
        return <FinalRound />;
      case Views.Splash:
      default:
        return <SplashScreen />;
    }
  }
  
  return (
    <div className="App">
      { renderMainView() }
    </div>
  );
}

export default App;
