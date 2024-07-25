import styles from "./GameResultMessage.module.css";
import type { Tie } from "../Game/Game.tsx";
import { BettingOption } from "../../config/BettingOptions.ts";

interface GameResultMessageProps {
  winningOption: BettingOption | Tie | null;
  playerChoice: BettingOption | null;
  winSum: number;
}

const GameResultMessage = ({
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
