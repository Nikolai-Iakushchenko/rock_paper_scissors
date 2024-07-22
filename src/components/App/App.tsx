import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
import { useState } from "react";
// import InfoItem from "../InfoItem/InfoItem.tsx";
// import MessagePanel from "../MessagePanel/MessagePanel.tsx";
// import ControlPanel from "../ControlPanel/ControlPanel.tsx";
// import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
// import BettingPosition from "./BettingPosition/BettingPosition.tsx";

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
