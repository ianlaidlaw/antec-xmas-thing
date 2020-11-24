import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import SplashScreen from '../../views/SplashScreen';
import PresentSelect from '../../views/PresentSelect';
import { Views } from '../../res/constants';
import type { ReducerCombinedState } from '../../reducers';

function App() {
  const { view } = useSelector(({app}: ReducerCombinedState) => app);

  function renderMainView() {
    switch(view) {
      case Views.PresentSelect:
        return <PresentSelect />;
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
