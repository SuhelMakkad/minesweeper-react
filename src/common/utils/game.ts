export enum CellState {
  opened,
  closed,
  flagged,
}

export type Cell = {
  value: typeof BOMB | number;
  state: CellState;
};

export const BOMB = -1;

export const SIZE = 9;

export const TOTAL_BOMB = 10;

export const DIRECTIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
] as const;

export const getInitialState = (): Cell[][] => {
  // creating a clean board
  const board: Cell[][] = new Array(SIZE)
    .fill(0)
    .map((_) => new Array(SIZE).fill(0).map((_) => ({ value: 0, state: CellState.closed })));

  // adding bombs randomly
  let availableBomb = TOTAL_BOMB;
  while (availableBomb > 0) {
    const randomColIndex = Math.round(Math.random() * (SIZE - 1));
    const randomRowIndex = Math.round(Math.random() * (SIZE - 1));

    if (board[randomRowIndex][randomColIndex].value == BOMB) {
      continue;
    }

    board[randomRowIndex][randomColIndex].value = BOMB;
    availableBomb--;
  }

  console.log(board);

  // count adjacent numbers
  board.forEach((row, rowIndex) =>
    row.map((cell, colIndex) => {
      if (cell.value === BOMB) return;

      DIRECTIONS.forEach((direction) => {
        const [offsetRow, offsetCol] = direction;

        const adjacentRowIndex = rowIndex + offsetRow;
        const adjacentColIndex = colIndex + offsetCol;

        if (
          adjacentColIndex >= 0 &&
          adjacentRowIndex >= 0 &&
          adjacentColIndex < SIZE &&
          adjacentRowIndex < SIZE &&
          board[adjacentRowIndex][adjacentRowIndex].value === BOMB
        ) {
          cell.value += 1;
        }
      });
    })
  );

  return board;
};
