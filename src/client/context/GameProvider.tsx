import { useNavigate } from '@tanstack/react-router';
import { useCallback, useState } from 'react';
import { v7 as uuid } from 'uuid';

import { GameContext } from './GameContext';

type GameContextProviderProps = {
  children: React.ReactNode;
};

export const GameProvider = ({ children }: GameContextProviderProps) => {
  const navigate = useNavigate();

  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');
  const [score, setScore] = useState<number[]>([0, 0]);

  const players = [
    {
      name: player1,
      score: score[0],
      symbol: 'X',
    },
    {
      name: player2,
      score: score[1],
      symbol: 'O',
    },
  ];

  const startLocalGame = (player1Name: string, player2Name: string) => {
    // TODO: Maybe save players name in local storage, for a little persistance
    setPlayer1(player1Name);
    setPlayer2(player2Name);

    const gameId = uuid();
    navigate({
      to: '/game/$gameId',
      params: {
        gameId,
      },
    });
  };

  const increaseScore = useCallback(
    (playerIndex: number) => {
      const newScore = [...score];
      newScore[playerIndex] += 1;
      setScore(newScore);
    },
    [score],
  );

  return (
    <GameContext.Provider
      value={{
        players,
        startLocalGame,
        increaseScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
