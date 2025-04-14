import { createFileRoute } from '@tanstack/react-router';

import { Board } from '@/components/Board';
import { useGameContext } from '@/hooks/useGameContext';

export const Route = createFileRoute('/game/$gameId')({
  component: Game,
});

function Game() {
  const { players } = useGameContext();

  return (
    <>
      {/* TODO: This is for Online Game
      <NavBar>
        <Button className="bg-blue-500 hover:bg-blue-400">Share</Button>
        <Button variant="secondary">Suggest draw</Button>
        <Button variant="destructive">Forfeit</Button>
      </NavBar> */}

      <main className="py-15">
        <div className="text-center">
          <div className="text-2xl">
            {players[0].name} (X): {players[0].score}
          </div>
          <div className="text-2xl">
            {players[1].name} (O): {players[1].score}
          </div>
        </div>

        <section>
          <Board />
        </section>
      </main>
    </>
  );
}
