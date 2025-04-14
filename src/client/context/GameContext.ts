import { createContext } from 'react';

import { Player } from '@/constants';

type GameContext = {
  players: Player[];
  startLocalGame: (player1: string, player2: string) => void;
  increaseScore: (playerIndex: number) => void;
};

export const GameContext = createContext<GameContext | undefined>(undefined);
