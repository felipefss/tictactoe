import { NavBar } from "./components/NavBar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <NavBar>
        Mode selection:
        <Button>Local</Button>
        <Button>Online</Button>
      </NavBar>
      <main className="p-4">Main stuff</main>
    </>
  );
}

export default App;
