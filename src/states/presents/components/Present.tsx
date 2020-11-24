import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPresent as selectPresentAction } from '../actions';
import './Present.css';

type Props = {
  name: string,
  owner?: string | null | undefined,
  stolen: boolean,
  hideName: boolean,
  onSelect: (name: string) => void,
}

function Present(props: Props) {
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
