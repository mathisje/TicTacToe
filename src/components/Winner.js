import React from 'react';

const Winner = (props) => {
  return props.winner ? (
    <div>
      `${props.winner} WINS!`
    </div>
  ) : null
};

export default Winner;