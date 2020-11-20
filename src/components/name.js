import React, { useState } from 'react';
import './Name.css';

function Name(props) {

  let [ complete, setComplete ] = useState(false);

  function completeName() {
    setComplete(!complete);
    props.onPress();
  }

  let myClass = "container";

  if (complete === true) {
    myClass += " complete";
  }

  return (
    <div 
      id={props.person}
      className={myClass}
      onClick={completeName}
    >
      <p style={{color: props.color}}>
        {props.person}
      </p>



    </div>
  )
}

export default Name;