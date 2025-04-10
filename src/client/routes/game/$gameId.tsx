import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/game/$gameId")({
  component: Game,
});

function Game() {
  return <div>Hello "/game/$gameId"!</div>;
}
