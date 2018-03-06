import React from 'react';
import BoardRow from './BoardRow';

const mapBoardToRows = (row, index) => {
  return (
    <div key={index}>
      <BoardRow squares={row} />
    </div>
  );
};

const Board = (props) => {
  return (
    <div>
      {props.board.map(mapBoardToRows)}
    </div>
  )
};

export default Board;