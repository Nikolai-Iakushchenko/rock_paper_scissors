import styles from "./BettingPosition.module.css";
//
// export type Theme = {
//   blue: "blue";
//   green: "green";
//   red: "red";
// };

interface BettingPositionProps {
  label: string;
  winner: boolean;
  theme: "blue" | "green" | "red";
}

const BettingPosition = ({
  label = "bet",
  theme = "blue",
  winner = false,
}: BettingPositionProps) => {
  return (
    <div className={`${styles.bettingPosition} ${styles[theme]} ${winner}`}>
      {label}
    </div>
  );
};

export default BettingPosition;
