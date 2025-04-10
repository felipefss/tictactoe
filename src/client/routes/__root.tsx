import { createRootRoute, Outlet } from "@tanstack/react-router";

import { GameProvider } from "@/context/GameProvider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <GameProvider>
      <Outlet />
    </GameProvider>
  );
}
