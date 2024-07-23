import styles from "./GameResultMessage.module.css";
import type { BettingOption, Tie } from "../Game/Game.tsx";

interface GameResultMessageProps {
  winner: BettingOption | Tie | null;
  playerChoice: BettingOption | null;
}

const GameResultMessage = ({
  playerChoice,
  winner,
}: GameResultMessageProps) => {
  const message = winner === "tie" ? "Tie" : `${winner} won`;

  return (
    <div className={styles.gameResultMessage}>
      <div className={styles.winningBet}>{message}</div>

      {playerChoice === winner && (
        <div className={styles.winMessage}>
          <span className={styles.winText}>you win</span> xxx.xx
        </div>
      )}
    </div>
  );
};

export default GameResultMessage;
