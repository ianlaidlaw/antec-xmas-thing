import './App.css';
import Name from './components/name.js';
import Button from './components/button.js';
import React, { useState } from 'react';

function App() {
  /* 
  js comment
  */

  function testFunction() {
    // let myString = '555';
    // let myNumber = 555;

    let myArray = [3, 25, 534, 5, 88, 65, 434, 19, 29];

    let myNewArray = myArray.map((currentValue) => {
      if (currentValue % 2 === 1) {
        let newValue = currentValue * 2;
        return newValue
      }
      else {
        return currentValue;
      }
    });

    console.log(myNewArray);
  }

  let [showButton, setShowButton] = useState(true);

  function getNames() {
    return [
      <Name 
        person='Twizzlers'
        onPress={() => setShowButton(true)}
        /*color='red'*/ 
      />,
      <Name 
        person='Nibs'
        onPress={() => setShowButton(true)}
        /*color='pink'*/ 
      />,
     <Name 
        person='Black Licorice'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />,
      <Name 
        person='Pizza'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />,
      <Name 
        person='Cat Treats'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />,
      <Name 
        person='Dog Food'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />,
      <Name 
        person='Kitty Litter'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />,
      <Name 
        person='Chicken Wings'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />,
      <Name 
        person='Puppy Cone'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />,
      <Name 
        person='Yo ga Mat'
        onPress={() => setShowButton(true)}
        /*color='green'*/ 
      />
    ];
  }

  let myNames = getNames();

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
          // onPress={() => setShowButton(false)}
          onPress={testFunction}
      />
      

      {
        myNames.map((currentName, index) => {
          let myFormat = '';
          let newIndex = index + 1;
          if (index % 5 === 4) {
            myFormat = "five"
          }
          else if (index % 2 ===1) {
            myFormat = "even"
          }
          // check index and set className here

          return (
            <div
              className={myFormat}
            >
              <span>
                { newIndex }
              </span>
              { currentName }
            </div>
          );
        })
      }
      
    </div>
  );
}

export default App;
