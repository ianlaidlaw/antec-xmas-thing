import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPresent as selectPresentAction } from '../actions';
import './Present.css';
import mcdonalds from '../../../res/img/mcdonalds.png';
import { ReducerCombinedState } from '../../../reducers';
import type { PresentType } from '../Types';

type Props = {
  name: string,
  owner?: string | null | undefined,
  stolen: boolean,
  hideName: boolean,
  onSelect: (name: PresentType) => void,
  index?: number,
  present: PresentType
}

const Present = memo((props: Props) => {
  const dispatch = useDispatch();
  const { app: { randomColors } } = useSelector((state: ReducerCombinedState) => state);

  async function selectPresent() {
    await dispatch({
      type: selectPresentAction,
      payload: props.present,
    });

    props.onSelect(props.present);
  }

  function renderUnopened() {
    const index = props.index || 1;
    const randomColor = randomColors[index];

    return (
      <div className='unopened' style={{backgroundColor: randomColor}}>
        <span className='present-number'>{index}</span>
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
});

export default Present;
