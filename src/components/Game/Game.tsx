import styles from "./Game.module.css";
import BettingPositions from "../BettingPositions/BettingPositions.tsx";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";

const Game = () => {
  return (
    <main className={styles.game}>
      <MessagePanel />
      <BettingPositions />
      <ControlPanel />
    </main>
  );
};

export default Game;
