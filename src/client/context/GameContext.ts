import { createContext } from "react";

type Player = {
  name: string;
  score: number;
};

type GameContext = {
  players: Player[];
  startLocalGame: (player1: string, player2: string) => void;
};

export const GameContext = createContext<GameContext | undefined>(undefined);
