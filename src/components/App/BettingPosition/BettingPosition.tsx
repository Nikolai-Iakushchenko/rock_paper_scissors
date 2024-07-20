import styles from "./BettingPosition.module.css";
import cn from "classnames";
import Bet from "../../Bet/Bet.tsx";

interface BettingPositionProps {
  label: string;
  winner: boolean;
  bet: number;
  theme: "blue" | "green" | "red";
}

const BettingPosition = ({
  label = "bet",
  theme = "blue",
  winner = false,
  bet = 0,
}: BettingPositionProps) => {
  const bettingPositionClass = cn(styles.bettingPosition, styles[theme], {
    [styles.winner]: winner,
  });

  return (
    <div className={bettingPositionClass}>
      <div>{bet !== 0 && <Bet bet={bet} />}</div>
      <div>{label}</div>
    </div>
  );
};

export default BettingPosition;
