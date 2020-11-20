import './App.css';
import Name from './components/name.js';
import Button from './components/button.js';
import React, { useState } from 'react';

function App() {
  /* 
  js comment
  */

  let [showButton, setShowButton] = useState(true);

  return (
    <div className="App">
      { /* html comment */ }
      <h1 className="blue">
        Groceries for Ian
      </h1>
      (my favourite derp)
      
      <Button
          text = "Who's Next?"
          show={showButton}
          onPress={() => setShowButton(false)}
      />

      <Name 
        person='Twizzlers'
        onPress={() => setShowButton(true)}
        /*color='red'*/ 
      />
      <Name 
        person='Nibs'
        onPress={() => setShowButton(true)}
        /*color='pink'*/ 
      />
     <Name 
        person='Black Licorice'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />
      
    </div>
  );
}

export default App;
