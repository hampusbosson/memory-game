import "./App.css"
import StartPage from "./components/StartPage/StartPage";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <StartPage 
    setDifficulty={setDifficulty}
    />
  )
}

export default App;
