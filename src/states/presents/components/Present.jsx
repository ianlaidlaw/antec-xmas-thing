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
    });

    props.onSelect(props.name);
  }

  function renderOwner() {
    if (props.owner) {
      return (
        <span> - {props.owner}</span>
      );
    }

    return null;
  }

  function renderStolen() {
    if (props.stolen) {
      return (
        <span> - STOLEN THIS ROUND</span>
      );
    }

    return null;
  }

  return (
    <div className='present-container' onClick={selectPresent}>
      { props.hideName ? <span>PICK ME!</span> : props.name }
      { renderOwner() }
      { renderStolen() }
    </div>
  );
}

export default Present;
