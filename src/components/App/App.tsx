import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
import { useState } from "react";

const INITIAL_BALANCE = 5000;

function App() {
  const [balance, setBalance] = useState(INITIAL_BALANCE);

  return (
    <div className={styles.app}>
      <InfoPanel playersBalance={balance} />
      <Game playersBalance={balance} setPlayersBalance={setBalance} />
    </div>
  );
}

export default App;
