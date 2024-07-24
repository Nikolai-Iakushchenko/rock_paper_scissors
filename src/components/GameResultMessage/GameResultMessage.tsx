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
  const wonOptionMessage = winner === "tie" ? "Tie" : `${winner} won`;
  const playerWonSumMessage =
    playerChoice === winner ? (
      <>
        <span className={styles.winText}>you win</span> xxx.xx
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
