
export const initialState = {
  board: [
    [
      {
        id: 0,
        row: 0,
        column: 0,
        mark: ''
      },
      {
        id: 1,
        row: 0,
        column: 1,
        mark: ''
      },
      {
        id: 2,
        row: 0,
        column: 2,
        mark: ''
      }
    ],
    [
      {
        id: 3,
        row: 1,
        column: 0,
        mark: ''
      },
      {
        id: 4,
        row: 1,
        column: 1,
        mark: ''
      },
      {
        id: 5,
        row: 1,
        column: 2,
        mark: ''
      }
    ],
    [
      {
        id: 6,
        row: 2,
        column: 0,
        mark: ''
      },
      {
        id: 7,
        row: 2,
        column: 1,
        mark: ''
      },
      {
        id: 8,
        row: 2,
        column: 2,
        mark: ''
      }
    ]
  ],
  player: 'X',
  turn: 0,
  winner: null
};
