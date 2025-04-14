import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import { GameMode, IS_ONLINE_ENABLED } from '@/constants';
import { useGameContext } from '@/hooks/useGameContext';

import { NavBar } from '../components/NavBar';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [mode, setMode] = useState<GameMode>(GameMode.Local);
  const [player1, setPlayer1] = useState<string>('Player 1');
  const [player2, setPlayer2] = useState<string>('Player 2');

  const { startLocalGame } = useGameContext();

  const handleStartGame = () => {
    startLocalGame(player1, player2);
  };

  return (
    <>
      <NavBar>
        Mode selection:
        <Button
          variant={mode === GameMode.Local ? 'default' : 'outline'}
          onClick={() => {
            setMode(GameMode.Local);
          }}
        >
          Local
        </Button>
        <Button
          disabled={!IS_ONLINE_ENABLED}
          variant={mode === GameMode.Online ? 'default' : 'outline'}
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
                    Player {mode === GameMode.Local ? '1' : 'name'}
                  </Label>
                  <Input
                    id="player1"
                    placeholder="e.g: Jane Doe"
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                  />
                </div>

                {mode === GameMode.Local && (
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="player2">Player 2</Label>
                    <Input
                      id="player2"
                      placeholder="e.g: John Doe"
                      value={player2}
                      onChange={(e) => setPlayer2(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </form>
          </CardContent>

          <CardFooter>
            {mode === GameMode.Local && (
              <Button onClick={handleStartGame}>Start game</Button>
            )}

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

export default Index;
