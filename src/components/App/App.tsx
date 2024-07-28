import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
import { useState } from "react";
import InfoBox from "../InfoBox/InfoBox.tsx";

const INITIAL_BALANCE = 5000;

function App() {
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [sumOfBets, setSumOfBets] = useState(0);
  const [winSum, setWinSum] = useState(0);

  return (
    <div className={styles.app}>
      <InfoPanel>
        <InfoBox label={"balance"} value={balance} />
        <InfoBox label={"bet"} value={sumOfBets} />
        <InfoBox label={"win"} value={winSum} />
      </InfoPanel>

      <Game
        setSumOfBets={setSumOfBets}
        winSum={winSum}
        setWinSum={setWinSum}
        playersBalance={balance}
        setPlayersBalance={setBalance}
      />
    </div>
  );
}

export default App;
