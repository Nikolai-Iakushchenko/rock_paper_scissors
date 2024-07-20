import styles from "./MessagePanel.module.css";
import StartGameMessage from "../StartGameMessage/StartGameMessage.tsx";

const MessagePanel = () => {
  return (
    <div className={styles.messagePanel}>
      <StartGameMessage />
    </div>
  );
};

export default MessagePanel;
