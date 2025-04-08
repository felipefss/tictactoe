import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

enum GameMode {
  Local = "LOCAL",
  Online = "ONLINE",
}

function App() {
  const [mode, setMode] = useState<GameMode>(GameMode.Local);

  return (
    <>
      <NavBar>
        Mode selection:
        <Button
          variant={mode === GameMode.Local ? "default" : "outline"}
          onClick={() => {
            setMode(GameMode.Local);
          }}
        >
          Local
        </Button>
        <Button
          variant={mode === GameMode.Online ? "default" : "outline"}
          onClick={() => {
            setMode(GameMode.Online);
          }}
        >
          Online
        </Button>
      </NavBar>

      <main className="flex justify-center px-4 py-50">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Game setup</CardTitle>
          </CardHeader>

          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="player1">
                    Player {mode === GameMode.Local ? "1" : "name"}
                  </Label>
                  <Input id="player1" placeholder="e.g: Jane Doe" />
                </div>

                {mode === GameMode.Local && (
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="player2">Player 2</Label>
                    <Input id="player2" placeholder="e.g: John Doe" />
                  </div>
                )}
              </div>
            </form>
          </CardContent>

          <CardFooter>
            {mode === GameMode.Local && <Button>Start game</Button>}

            {mode === GameMode.Online && (
              <div className="flex w-full justify-between">
                <Button variant="secondary">Join game</Button>
                <Button>Create game</Button>
              </div>
            )}
          </CardFooter>
        </Card>
      </main>
    </>
  );
}

export default App;
