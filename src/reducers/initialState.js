
export const initialState = {
  board: {
    squares: [
      {
        row: 0,
        column: 0,
        mark: ''
      },
      {
        row: 0,
        column: 1,
        mark: ''
      },
      {
        row: 0,
        column: 2,
        mark: ''
      },
      {
        row: 1,
        column: 0,
        mark: ''
      },
      {
        row: 1,
        column: 1,
        mark: ''
      },
      {
        row: 1,
        column: 2,
        mark: ''
      },
      {
        row: 2,
        column: 0,
        mark: ''
      },
      {
        row: 2,
        column: 1,
        mark: ''
      },
      {
        row: 2,
        column: 2,
        mark: ''
      }
    ]
  },
  turn: 'X',
  winner: null
};
