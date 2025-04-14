import { useState } from 'react';

import type { Board as BoardType } from '@/constants';
import { checkWinner, isDraw } from '@/helpers/checkWinner';
import { useGameContext } from '@/hooks/useGameContext';

import { Button } from './ui/button';

export const Board = () => {
  const [board, setBoard] = useState<BoardType>([
    Array.from({ length: 3 }, () => null),
    Array.from({ length: 3 }, () => null),
    Array.from({ length: 3 }, () => null),
  ]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverText, setGameOverText] = useState('');

  const { players, increaseScore } = useGameContext();

  const currentPlayer = players[currentTurn];

  const handleClick = (i: number, j: number) => {
    if (!isGameOver && !board[i][j]) {
      const newBoard = [...board];
      newBoard[i][j] = currentPlayer.symbol;
      setBoard(newBoard);

      const winner = checkWinner(newBoard);

      if (!winner) {
        if (isDraw(newBoard)) {
          setIsGameOver(true);
          setGameOverText("It's a draw!");
          return;
        }

        setCurrentTurn((prev) => (prev + 1) % 2);
        return;
      }

      setIsGameOver(true);
      setGameOverText(`${currentPlayer.name} wins!`);
      increaseScore(currentTurn);
    }
  };

  const resetBoard = () => {
    setBoard([
      Array.from({ length: 3 }, () => null),
      Array.from({ length: 3 }, () => null),
      Array.from({ length: 3 }, () => null),
    ]);
    setIsGameOver(false);
  };

  return (
    <div className="mx-auto w-fit">
      <div className="mt-10 mb-10 text-center text-5xl">
        {isGameOver ? (
          <div className="flex flex-col items-center gap-4">
            <span className="text-blue-500">{gameOverText}</span>
            <Button
              size="lg"
              className="bg-green-700 text-xl hover:bg-green-700 hover:opacity-80"
              onClick={resetBoard}
            >
              Play again
            </Button>
          </div>
        ) : (
          <span>Turn: {currentPlayer.name}</span>
        )}
      </div>

      <div className="flex w-[27rem] flex-col items-center gap-1 bg-gray-200">
        {board.map((row, i) => (
          <div key={i} className="flex items-center justify-center gap-1">
            {row.map((_, j) => (
              <div
                key={j}
                className="flex h-36 w-36 items-center justify-center bg-white text-5xl"
                onClick={() => handleClick(i, j)}
              >
                {board[i][j]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
