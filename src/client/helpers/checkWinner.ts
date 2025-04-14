import { Board } from '@/constants';

export const checkWinner = (board: Board) => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] &&
      board[0][j] === board[1][j] &&
      board[0][j] === board[2][j]
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    board[0][0] &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return true;
  }

  if (
    board[0][2] &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return true;
  }

  // No winner
  return false;
};

export const isDraw = (board: Board) => {
  for (const row of board) {
    if (row.includes(null)) {
      return false; // If there's an empty cell, it's not a draw
    }
  }

  return true;
};
