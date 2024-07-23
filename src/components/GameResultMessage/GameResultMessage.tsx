import styles from "./GameResultMessage.module.css";
import type { Option, Tie } from "../Game/Game.tsx";

interface GameResultMessageProps {
  winner: Option | Tie | null;
}

const GameResultMessage = ({ winner }: GameResultMessageProps) => {
  return (
    <div className={styles.gameResultMessage}>
      <div className={styles.winningBet}>{winner} won</div>
      <div className={styles.winMessage}>
        <span className={styles.winText}>you win</span> xxx.xx
      </div>
    </div>
  );
};

export default GameResultMessage;
