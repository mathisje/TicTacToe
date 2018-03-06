import { initialState } from './initialState'

const rootReducer = (state = { ...initialState }, action) => {
  if (action.type === 'PLACE_MARK') {
    if (state.winner !== null || action.square.mark !== '') {
      return state;
    }

    let newBoard = evaluateBoard(state.board, action.square, state.player);
    let newPlayer = evaluatePlayer(state.player);
    let newWinner = evaluateWinner(newBoard, state.player, state.turn);
    return { ...state, board: newBoard, player: newPlayer, winner: newWinner, turn: state.turn + 1 };
  }
  else if (action.type === 'RESET_GAME') {
    return { ...initialState };
  }
  else {
    return state;
  }
};

const evaluateBoard = (board, square, mark) => {
  let newBoard = board.slice();
  let newRow = newBoard[square.row].slice();
  let newSquare = { ...newRow[square.column] };
  newSquare.mark = mark;
  newRow[square.column] = newSquare;
  newBoard[square.row] = newRow;
  return newBoard;
};

const evaluatePlayer = (player) => {
  if (player === 'X') {
    return 'O';
  }
  else {
    return 'X';
  }
};

const evaluateWinner = (board, mark, turn) => {
  if (
    (board[0][0].mark !== '' && board[0][0].mark === board[0][1].mark && board[0][1].mark === board[0][2].mark) ||
    (board[1][0].mark !== '' && board[1][0].mark === board[1][1].mark && board[1][1].mark === board[1][2].mark) ||
    (board[2][0].mark !== '' && board[2][0].mark === board[2][1].mark && board[2][1].mark === board[2][2].mark) ||
    (board[0][0].mark !== '' && board[0][0].mark === board[1][0].mark && board[1][0].mark === board[2][0].mark) ||
    (board[0][1].mark !== '' && board[0][1].mark === board[1][1].mark && board[1][1].mark === board[2][1].mark) ||
    (board[0][2].mark !== '' && board[0][2].mark === board[1][2].mark && board[1][2].mark === board[2][2].mark) ||
    (board[0][0].mark !== '' && board[0][0].mark === board[1][1].mark && board[1][1].mark === board[2][2].mark) ||
    (board[2][0].mark !== '' && board[2][0].mark === board[1][1].mark && board[1][1].mark === board[0][2].mark)
  ) {
    return mark;
  }
  else if (turn === 8) {
    return 'CAT'
  }
  else {
    return null;
  }
};

export default rootReducer;