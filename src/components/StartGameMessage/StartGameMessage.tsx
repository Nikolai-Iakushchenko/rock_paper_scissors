import styles from "./StartGameMessage.module.css";

const StartGameMessage = ({ message = "pick your positions" }) => {
  return <div className={styles.startGameMessage}>{message}</div>;
};

export default StartGameMessage;
