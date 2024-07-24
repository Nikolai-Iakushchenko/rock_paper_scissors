import styles from "./BettingDoneButton.module.css";
import { GameStage } from "../Game/Game.tsx";

// function bettingOptionsMatch() {}
//
// function runGameRound() {
//   //    run paper,scissors,rock match
//   bettingOptionsMatch();
//   //   compare computer vs player choice and find who won
// }

interface BettingDoneButtonProps {
  runGameRound: () => void;
  gameStage: GameStage;
}

const BettingDoneButton = ({
  runGameRound,
  gameStage,
}: BettingDoneButtonProps) => {
  return (
    <button
      disabled={gameStage === "playing"}
      onClick={runGameRound}
      className={styles.bettingDoneButton}
    >
      play
    </button>
  );
};

export default BettingDoneButton;
