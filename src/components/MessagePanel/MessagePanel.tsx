import styles from "./MessagePanel.module.css";
import { GameStage, Tie } from "../Game/Game.tsx";
import GameResultMessage from "../GameResultMessage/GameResultMessage.tsx";
import type { BettingOption } from "../../config/BettingOptions.ts";
import StartGameMessage from "../StartGameMessage/StartGameMessage.tsx";
import PlayersChoiceMessage from "../App/PlayersChoiceMessage/PlayersChoiceMessage.tsx";

interface MessagePanelProps {
  computerChoice: BettingOption | null;
  playerChoice: BettingOption | null;
  gameStage: GameStage;
  winningOption: BettingOption | Tie | null;
  winSum: number;
  hasPlayerWonBet: boolean;
}

const MessagePanel = ({
  winSum,
  computerChoice,
  playerChoice,
  gameStage,
  winningOption,
  hasPlayerWonBet,
}: MessagePanelProps) => {
  return (
    <div className={styles.messagePanel}>
      {gameStage === GameStage.START && <StartGameMessage />}
      {gameStage === GameStage.PLAYING && (
        <PlayersChoiceMessage
          playerChoice={playerChoice}
          computerChoice={computerChoice}
        />
      )}
      {gameStage === "finish" && (
        <GameResultMessage
          hasPlayerWonBet={hasPlayerWonBet}
          winSum={winSum}
          playerChoice={playerChoice}
          winningOption={winningOption}
        />
      )}
    </div>
  );
};

export default MessagePanel;
