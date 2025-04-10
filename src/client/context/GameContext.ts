import { createContext } from "react";

type GameContext = {
  startLocalGame: (player1: string, player2: string) => void;
};

export const GameContext = createContext<GameContext | undefined>(undefined);
