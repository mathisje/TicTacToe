
export const placeMark = (square) => {
  console.log(square);
  return {
    type: 'PLACE_MARK',
    square
  }
};

export const resetGame = () => {
  return {
    type: 'RESET_GAME'
  }
};