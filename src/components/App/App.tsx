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

export enum BettingOption {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

type BettingPositions = {
  [BettingOption.ROCK]?: number;
  [BettingOption.PAPER]?: number;
  [BettingOption.SCISSORS]?: number;
};

export interface PlayerAccount {
  balance: number;
  bettingPositions: BettingPositions;
}

function App() {
  // const [playersBalance, setPlayersBalance] = useState(INITIAL_PLAYERS_BALANCE);
  const [playerAccount, setPlayerAccount] = useState<PlayerAccount>({
    balance: INITIAL_PLAYERS_BALANCE,
    bettingPositions: {},
  });

  return (
    <div className={styles.app}>
      <InfoPanel playerAccount={playerAccount} />
      <Game playerAccount={playerAccount} setPlayerAccount={setPlayerAccount} />
    </div>
  );
}

export default App;
