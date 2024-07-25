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
      <p>
        {computerChoice} <span className={styles.preposition}>vs</span>{" "}
        {playerChoice}
      </p>
    </div>
  );
};

export default PlayersChoiceMessage;
