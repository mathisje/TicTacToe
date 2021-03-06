import React from 'react';

const BoardSquare = (props) => {
  return (
    <div className='square' onClick={() => props.placeMarkHandler(props.square)}>
      {props.square.mark}
    </div>
  )
};

export default BoardSquare;