import styles from "./BettingDoneButton.module.css";
import { GameStage } from "../Game/Game.tsx";

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
      {gameStage === GameStage.FINISH ? "clear" : "play"}
    </button>
  );
};

export default BettingDoneButton;
