
export const placeMark = (square) => {
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