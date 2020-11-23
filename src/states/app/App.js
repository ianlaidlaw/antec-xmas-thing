import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import SplashScreen from '../../views/SplashScreen.jsx';
import { Views } from '../../res/constants.js';
import PresentSelect from '../../views/PresentSelect.jsx';

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
