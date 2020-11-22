import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPresent as selectPresentAction } from '../actions.js';
import './Present.css';

function Present(props) {
  const dispatch = useDispatch();

  function selectPresent() {
    dispatch({
      type: selectPresentAction,
      payload: props.name,
    })
  }

  return (
    <div className='present-container' onClick={selectPresent}>
      { props.name }
    </div>
  );
}

export default Present;
