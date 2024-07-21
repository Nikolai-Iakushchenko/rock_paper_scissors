import styles from "./GameResultMessage.module.css";

const GameResultMessage = () => {
  return (
    <div className={styles.gameResultMessage}>
      <div className={styles.winningBet}>paper won</div>
      <div className={styles.winMessage}>
        <span className={styles.winText}>you win</span> xxx.xx
      </div>
    </div>
  );
};

export default GameResultMessage;
