import styles from "./MessagePanel.module.css";
// import StartGameMessage from "../StartGameMessage/StartGameMessage.tsx";
import PlayersChoiceMessage from "../App/PlayersChoiceMessage/PlayersChoiceMessage.tsx";

const MessagePanel = () => {
  return (
    <div className={styles.messagePanel}>
      {/*<StartGameMessage />*/}
      <PlayersChoiceMessage />
    </div>
  );
};

export default MessagePanel;
