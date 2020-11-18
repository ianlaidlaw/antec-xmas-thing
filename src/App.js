import './App.css';
import Name from './components/name.js';

function App() {
  /* 
  js comment
  */

  return (
    <div className="App">
      { /* html comment */ }
      <h1 className="blue">
        Groceries for Ian
      </h1>
      (my favourite derp)
      
      
      <Name 
        person='Twizzlers'
        /*color='red'*/ 
      />
      <Name 
        person='Nibs'
        /*color='pink'*/ 
      />
     <Name 
        person='Black Licorice'
        /*color='green'*/ 
      />
    </div>
  );
}

export default App;
