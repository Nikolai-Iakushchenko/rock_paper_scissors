import styles from "./GameResultMessage.module.css";
import type { BettingOption, Tie } from "../Game/Game.tsx";

interface GameResultMessageProps {
  winner: BettingOption | Tie | null;
  playerChoice: BettingOption | null;
  winSum: number;
}

const GameResultMessage = ({
  playerChoice,
  winner,
  winSum,
}: GameResultMessageProps) => {
  const wonOptionMessage = winner === "tie" ? "Tie" : `${winner} won`;
  const playerWonSumMessage =
    winSum > 0 ? (
      <>
        <span className={styles.winText}>you win</span> {winSum}
      </>
    ) : (
      "Better luck next time"
    );

  return (
    <div className={styles.gameResultMessage}>
      <div className={styles.winningBet}>{wonOptionMessage}</div>
      <div className={styles.winMessage}>{playerWonSumMessage}</div>
    </div>
  );
};

export default GameResultMessage;
