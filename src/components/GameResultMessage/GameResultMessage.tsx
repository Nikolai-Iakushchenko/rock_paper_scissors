import styles from "./GameResultMessage.module.css";
import type { BettingOption, Tie } from "../Game/Game.tsx";

interface GameResultMessageProps {
  winner: BettingOption | Tie | null;
  playerChoice: BettingOption | null;
  winSum: number;
}

const GameResultMessage = ({
  playerChoice,
  winningOption,
  winSum,
}: GameResultMessageProps) => {
  const wonOptionMessage =
    winningOption === "tie" ? "Tie" : `${winningOption} won`;
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
