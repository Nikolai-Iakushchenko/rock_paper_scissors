import styles from "./MessagePanel.module.css";
import GameResultMessage from "../GameResultMessage/GameResultMessage.tsx";
// import StartGameMessage from "../StartGameMessage/StartGameMessage.tsx";
// import PlayersChoiceMessage from "../App/PlayersChoiceMessage/PlayersChoiceMessage.tsx";

const MessagePanel = () => {
  return (
    <div className={styles.messagePanel}>
      {/*<StartGameMessage />*/}
      {/*<PlayersChoiceMessage />*/}
      <GameResultMessage />
    </div>
  );
};

export default MessagePanel;
