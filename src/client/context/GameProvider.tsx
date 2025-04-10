import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { v7 as uuid } from "uuid";

import { GameContext } from "./GameContext";

type GameContextProviderProps = {
  children: React.ReactNode;
};

export const GameProvider = ({ children }: GameContextProviderProps) => {
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [score, setScore] = useState<number[]>([0, 0]);

  const navigate = useNavigate();
  const players = [
    {
      name: player1,
      score: score[0],
    },
    {
      name: player2,
      score: score[1],
    },
  ];

  const startLocalGame = (player1Name: string, player2Name: string) => {
    setPlayer1(player1Name);
    setPlayer2(player2Name);

    const gameId = uuid();
    navigate({
      to: "/game/$gameId",
      params: {
        gameId,
      },
    });
  };

  return (
    <GameContext.Provider
      value={{
        players,
        startLocalGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
