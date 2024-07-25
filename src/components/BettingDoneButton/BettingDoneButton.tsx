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
  bettingDoneButtonHandler: () => void;
  gameStage: GameStage;
  isBettingDoneButtonDisabled: boolean;
}

const BettingDoneButton = ({
  bettingDoneButtonHandler,
  isBettingDoneButtonDisabled,
  gameStage,
}: BettingDoneButtonProps) => {
  return (
    <button
      disabled={isBettingDoneButtonDisabled}
      onClick={bettingDoneButtonHandler}
      className={styles.bettingDoneButton}
    >
      {gameStage === "finish" ? "clear" : "play"}
    </button>
  );
};

export default BettingDoneButton;
