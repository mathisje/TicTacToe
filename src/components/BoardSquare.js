import React from 'react';

const BoardSquare = (props) => {
  console.log(props.square);
  return (
    <div className='square' onClick={() => props.placeMarkHandler(props.square)}>
      {props.square.mark}
    </div>
  )
};

export default BoardSquare;