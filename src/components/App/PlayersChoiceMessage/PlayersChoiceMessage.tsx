import styles from "./PlayersChoiceMessage.module.css";
import type { BettingOption } from "../../../config/BettingOptions.ts";

interface PlayersChoiceMessageProps {
  computerChoice: BettingOption | null;
  playerChoice: BettingOption | null;
}

const PlayersChoiceMessage = ({
  computerChoice,
  playerChoice,
}: PlayersChoiceMessageProps) => {
  return (
    <div className={styles.playersChoiceMessage}>
      <div className={styles.computerChoice}>{computerChoice}</div>
      <div className={styles.preposition}>vs</div>
      <div className={styles.playerChoice}>{playerChoice}</div>
    </div>
  );
};

export default PlayersChoiceMessage;
