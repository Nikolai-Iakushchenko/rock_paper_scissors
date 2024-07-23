import styles from "./MessagePanel.module.css";
// import GameResultMessage from "../GameResultMessage/GameResultMessage.tsx";
import PlayersChoiceMessage from "../App/PlayersChoiceMessage/PlayersChoiceMessage.tsx";
import { BettingOption, GameStage, Tie } from "../Game/Game.tsx";
import StartGameMessage from "../StartGameMessage/StartGameMessage.tsx";
import GameResultMessage from "../GameResultMessage/GameResultMessage.tsx";

interface MessagePanelProps {
  computerChoice: BettingOption | null;
  playerChoice: BettingOption | null;
  gameStage: GameStage;
  winner: BettingOption | Tie | null;
}

const MessagePanel = ({
  computerChoice,
  playerChoice,
  gameStage,
  winner,
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
      {gameStage === "finish" && (
        <GameResultMessage playerChoice={playerChoice} winner={winner} />
      )}
    </div>
  );
};

export default MessagePanel;
