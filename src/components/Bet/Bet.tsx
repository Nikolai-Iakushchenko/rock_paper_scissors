import styles from "./Bet.module.css";

const Bet = ({ bet = 0 }) => {
  return <div className={styles.bet}>{bet}</div>;
};

export default Bet;
