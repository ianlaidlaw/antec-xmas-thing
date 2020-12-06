import React from 'react';
import './Participant.css';

type Props = {
  name: string,
  isHighlighted: boolean,
};

function Participant(props: Props) {
  let myClassName = 'remaining-name';
  myClassName += props.isHighlighted ? ' glow' : '';

  return (
    <div className={myClassName}>
      { props.name }
    </div>
  );
}

export default Participant;
