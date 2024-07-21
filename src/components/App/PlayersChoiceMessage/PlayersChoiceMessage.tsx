import styles from "./PlayersChoiceMessage.module.css";

const PlayersChoiceMessage = () => {
  return (
    <div className={styles.playersChoiceMessage}>
      <p>
        rock <span className={styles.preposition}>vs</span> paper
      </p>
    </div>
  );
};

export default PlayersChoiceMessage;
