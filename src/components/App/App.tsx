import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
import { useState } from "react";

const INITIAL_PLAYERS_BALANCE = 5000;

function App() {
  const [playersBalance, setPlayersBalance] = useState(INITIAL_PLAYERS_BALANCE);

  return (
    <div className={styles.app}>
      <InfoPanel playersBalance={playersBalance} />
      <Game
        playersBalance={playersBalance}
        setPlayersBalance={setPlayersBalance}
      />
    </div>
  );
}

export default App;
