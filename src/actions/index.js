
export const placeMark = (squareId) => {
  return {
    type: 'PLACE_MARK',
    squareId
  }
};

export const resetGame = () => {
  return {
    type: 'RESET_GAME'
  }
};