import React from "react";
import "./App.css";
import Duel from "./components/duel";
import PlayerLifePoints from "./components/playerLifePoints";

function App() {
  return (
    <div>
      <PlayerLifePoints name="Player One" />
      <Duel />
      <PlayerLifePoints name="Player Two" />
    </div>
  );
}

export default App;
