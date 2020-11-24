import React from 'react';

type Props = {
  name: string,
};

function Participant(props: Props) {
  return (
    <div>
      { props.name }
    </div>
  );
}

export default Participant;
