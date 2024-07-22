import styles from "./BettingDoneButton.module.css";

// function bettingOptionsMatch() {}
//
// function runGameRound() {
//   //    run paper,scissors,rock match
//   bettingOptionsMatch();
//   //   compare computer vs player choice and find who won
// }

interface BettingDoneButtonProps {
  runGameRound: () => void;
}

const BettingDoneButton = ({ runGameRound }: BettingDoneButtonProps) => {
  return (
    <button onClick={runGameRound} className={styles.bettingDoneButton}>
      play
    </button>
  );
};

export default BettingDoneButton;
