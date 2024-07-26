import "./App.css";
import StartPage from "./components/StartPage/StartPage";
import GamePage from "./components/GamePage/GamePage";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <div className="app">
      {difficulty === null ? (
        <StartPage setDifficulty={setDifficulty} />
      ) : (
        <GamePage difficulty={difficulty} />
      )}
    </div>
  );
}

export default App;
