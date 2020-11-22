import React, { useReducer } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import SplashScreen from '../../views/splashScreen';
import { Views } from '../../res/constants';
import PresentSelect from '../../views/presentSelect';

function App() {
  const { view } = useSelector(({app}) => app);

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
