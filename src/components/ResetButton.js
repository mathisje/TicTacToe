import React from 'react';

const ResetButton = (props) => {
  return (
    <button onClick={props.resetGameHandler}>
      RESET GAME
    </button>
  )
};

export default ResetButton;