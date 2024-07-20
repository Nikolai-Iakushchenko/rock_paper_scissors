import styles from "./BettingPosition.module.css";
import cn from "classnames";

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
  const bettingPositionClass = cn(styles.bettingPosition, styles[theme], {
    [styles.winner]: winner,
  });

  return (
    <div className={bettingPositionClass}>
      <div className={"bet"}></div>
      <div>{label}</div>
    </div>
  );
};

export default BettingPosition;
