import React from 'react';
import SquareContainer from './SquareContainer';

const mapRowToSquares = (square) => {
  return (
    <div key={square.id}>
      <SquareContainer row={square.row} column={square.column}/>
    </div>
  );
};

const BoardRow = (props) => {
  return (
    <div className='flex'>
      {props.squares.map(mapRowToSquares)}
    </div>
  )
};

export default BoardRow;