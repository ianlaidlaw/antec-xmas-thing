import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPresent as selectPresentAction } from '../actions';
import './Present.css';
import mcdonalds from '../../../res/img/mcdonalds.png';

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
      <div className='claimed-description'>
        <span>{ props.name }</span>
        <span>{ props.owner }</span>
      </div>
    );
  }

  function renderGiftCard() {
    return (
      <img className='claimed' src={mcdonalds} />
    );
  }

  let className = 'present-description-container';

  if (props.stolen) {
    className += ' stolen';
  }

  return (
    <div className={className}>
      <div className='present-container' onClick={selectPresent}>
        { props.hideName && renderUnopened() }
        { !props.hideName && renderGiftCard() }
      </div>
      { !props.hideName && renderClaimed() }
    </div>
  );
}

export default Present;
