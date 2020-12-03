import React from 'react';
import './Participant.css';

type Props = {
  name: string,
  isHighlighted: boolean,
};

function Participant(props: Props) {
  return (
    <div className={props.isHighlighted ? 'glow' : ''}>
      { props.name }
    </div>
  );
}

export default Participant;
