import { GameContext } from "@/context/GameContext";
import { useContext } from "react";

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("No GameContext provided.");
  }

  return context;
};
