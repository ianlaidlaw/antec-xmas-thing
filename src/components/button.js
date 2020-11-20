import React from 'react';
import './Button.css';

function Button(props) {


  if (!props.show) {
    return <p>Done</p>;
  } 

  return (
    <p>
      <button type="button" onClick={props.onPress}>
        {props.text}
      </button>
    </p>
  );
}


export default Button;