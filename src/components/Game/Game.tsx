import styles from "./Game.module.css";
// import { ReactElement } from "react";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
// import type { Theme } from "../App/BettingPosition/BettingPosition.tsx";
// import BettingPosition, {
//   BettingPositionTheme,
// } from "../App/BettingPosition/BettingPosition.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingDoneButton from "../BettingDoneButton/BettingDoneButton.tsx";
import type { PlayerAccount } from "../App/App.tsx";

interface GameProps {
  setPlayerAccount: React.Dispatch<React.SetStateAction<PlayerAccount>>;
  playerAccount: PlayerAccount;
}

const Game = ({ playerAccount, setPlayerAccount }: GameProps) => {
  return (
    <main className={styles.game}>
      <MessagePanel></MessagePanel>
      <BettingPositionList
        playerAccount={playerAccount}
        setPlayerAccount={setPlayerAccount}
      ></BettingPositionList>
      <ControlPanel>
        <BettingDoneButton />
      </ControlPanel>
    </main>
  );
};

export default Game;
