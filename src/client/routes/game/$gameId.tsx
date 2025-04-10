import { createFileRoute } from "@tanstack/react-router";

import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { useGameContext } from "@/hooks/useGameContext";

export const Route = createFileRoute("/game/$gameId")({
  component: Game,
});

function Game() {
  const { players } = useGameContext();

  return (
    <>
      <NavBar>
        <Button className="bg-blue-500 hover:bg-blue-400">Share</Button>
        <Button variant="secondary">Suggest draw</Button>
        <Button variant="destructive">Forfeit</Button>
      </NavBar>

      <main className="py-20">
        <div className="text-center">
          <div className="text-2xl">
            {players[0].name} (X): {players[0].score}
          </div>
          <div className="text-2xl">
            {players[1].name} (O): {players[1].score}
          </div>

          <div className="mt-10 text-5xl">Player 1 turn</div>
        </div>

        <section className="mt-20 flex items-center justify-center">
          <div className="grid w-[27rem] grid-cols-3">
            <div className="h-36 w-36 border-r-4 border-b-4"></div>
            <div className="h-36 w-36 border-r-4 border-b-4"></div>
            <div className="h-36 w-36 border-b-4"></div>

            <div className="h-36 w-36 border-r-4 border-b-4"></div>
            <div className="h-36 w-36 border-r-4 border-b-4"></div>
            <div className="h-36 w-36 border-b-4"></div>

            <div className="h-36 w-36 border-r-4"></div>
            <div className="h-36 w-36 border-r-4"></div>
            <div className="h-36 w-36"></div>
          </div>
        </section>
      </main>
    </>
  );
}
