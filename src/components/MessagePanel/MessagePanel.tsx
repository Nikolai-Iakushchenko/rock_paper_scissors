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
  winningOption: BettingOption | Tie | null;
  winSum: number;
}

const MessagePanel = ({
  winSum,
  computerChoice,
  playerChoice,
  gameStage,
  winningOption,
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
        <GameResultMessage
          winSum={winSum}
          playerChoice={playerChoice}
          winningOption={winningOption}
        />
      )}
    </div>
  );
};

export default MessagePanel;
