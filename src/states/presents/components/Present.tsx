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

  function renderUnopened() {
    return (
      <div className='unopened'>
        click
      </div>
    );
  }

  function renderClaimed() {
    return (
      <React.Fragment>
        { props.name }
        { renderOwner() }
        { renderStolen() }
      </React.Fragment>
    );
  }

  return (
    <div className='present-description-container'>
      <div className='present-container' onClick={selectPresent}>
        { props.hideName && renderUnopened() }
      </div>
      { !props.hideName && renderClaimed() }
    </div>
  );
}

export default Present;
