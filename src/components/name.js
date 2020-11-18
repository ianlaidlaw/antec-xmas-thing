import React from 'react';
import './Name.css';

function Name(props) {

  function completeName() {
    
    let myContainer = document.getElementById(props.person);
    
    if (myContainer.className === 'container') {
      myContainer.className='container complete';

    }
      
    else {
      myContainer.className='container';
    }
  }

  return (
    <div 
      id={props.person}
      className="container"
      onClick={completeName}
    >
      <p style={{color: props.color}}>
        {props.person}
      </p>
    </div>
  )
}

export default Name;