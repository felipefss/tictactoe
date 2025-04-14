export type Player = {
  name: string;
  score: number;
  symbol: string;
};

export const IS_ONLINE_ENABLED = false;

export enum GameMode {
  Local = 'LOCAL',
  Online = 'ONLINE',
}

export type Board = (string | null)[][];
