import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
import { useState } from "react";

const INITIAL_BALANCE = 5000;

function App() {
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  // const [bet, setBet] = useState(0);
  const [winSum, setWinSum] = useState(0);

  return (
    <div className={styles.app}>
      <InfoPanel playersBalance={balance} win={winSum} />
      <Game
        winSum={winSum}
        setWin={setWinSum}
        playersBalance={balance}
        setPlayersBalance={setBalance}
      />
    </div>
  );
}

export default App;
