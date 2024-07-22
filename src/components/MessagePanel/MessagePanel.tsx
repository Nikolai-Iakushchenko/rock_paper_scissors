import styles from "./MessagePanel.module.css";
// import GameResultMessage from "../GameResultMessage/GameResultMessage.tsx";
import PlayersChoiceMessage from "../App/PlayersChoiceMessage/PlayersChoiceMessage.tsx";
import { BettingOption } from "../Game/Game.tsx";

interface MessagePanelProps {
  computerChoice: BettingOption | null;
  playerChoice: BettingOption | null;
}

const MessagePanel = ({ computerChoice, playerChoice }: MessagePanelProps) => {
  return (
    <div className={styles.messagePanel}>
      {/*<StartGameMessage />*/}
      <PlayersChoiceMessage
        playerChoice={playerChoice}
        computerChoice={computerChoice}
      />
      {/*<GameResultMessage />*/}
    </div>
  );
};

export default MessagePanel;
