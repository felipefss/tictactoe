import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { v7 as uuid } from "uuid";

import { GameContext } from "./GameContext";

type GameContextProviderProps = {
  children: React.ReactNode;
};

export const GameProvider = ({ children }: GameContextProviderProps) => {
  const [player1Name, setPlayer1] = useState<string>("");
  const [player2Name, setPlayer2] = useState<string>("");
  const [score, setScore] = useState<number[]>([0, 0]);

  const navigate = useNavigate();

  const startLocalGame = (player1: string, player2: string) => {
    setPlayer1(player1);
    setPlayer2(player2);

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
        startLocalGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
