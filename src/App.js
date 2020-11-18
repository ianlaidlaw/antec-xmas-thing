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
        Antec Controls Secret Santa
      </h1>
      <Name 
        person='Terra'
        color='red'
      />
      <Name 
        person='Charlie'
        color='pink'
      />
     <Name 
        person='Momo'
        color='green'
      />
    </div>
  );
}

export default App;
