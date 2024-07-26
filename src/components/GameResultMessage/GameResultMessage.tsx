import styles from "./GameResultMessage.module.css";
import type { Tie } from "../Game/Game.tsx";
import { BettingOption } from "../../config/BettingOptions.ts";

interface GameResultMessageProps {
  winningOption: BettingOption | Tie | null;
  playerChoice: BettingOption | null;
  winSum: number;
  hasPlayerWonBet: boolean;
}

const GameResultMessage = ({
  winningOption,
  winSum,
  hasPlayerWonBet,
}: GameResultMessageProps) => {
  const wonOptionMessage =
    winningOption === "tie" ? "Tie" : `${winningOption} won`;
  const playerWonSumMessage = hasPlayerWonBet ? (
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
