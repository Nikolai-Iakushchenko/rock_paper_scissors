import styles from "./MessagePanel.module.css";
// import GameResultMessage from "../GameResultMessage/GameResultMessage.tsx";
import PlayersChoiceMessage from "../App/PlayersChoiceMessage/PlayersChoiceMessage.tsx";
import { BettingOption, GameStage } from "../Game/Game.tsx";
import StartGameMessage from "../StartGameMessage/StartGameMessage.tsx";
import GameResultMessage from "../GameResultMessage/GameResultMessage.tsx";

interface MessagePanelProps {
  computerChoice: BettingOption | null;
  playerChoice: BettingOption | null;
  gameStage: GameStage;
}

const MessagePanel = ({
  computerChoice,
  playerChoice,
  gameStage,
}: MessagePanelProps) => {
  return (
    <div className={styles.messagePanel}>
      {gameStage === "start" && <StartGameMessage />}
      {gameStage === "playing" && (
        <PlayersChoiceMessage
          playerChoice={playerChoice}
          computerChoice={computerChoice}
        />
      )}
      {gameStage === "finish" && <GameResultMessage />}
    </div>
  );
};

export default MessagePanel;
