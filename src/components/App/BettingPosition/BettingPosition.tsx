import styles from "./BettingPosition.module.css";
import cn from "classnames";
import Bet from "../../Bet/Bet.tsx";
// import { BETTING_POSITION_THEME } from "../../Game/Game.tsx";

// import type { Theme } from "../../Game/Game.tsx";
// export type Theme = "blue" | "green" | "red";

export enum BettingPositionTheme {
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
}

interface BettingPositionProps {
  label: string;
  winner: boolean;
  bet: number;
  theme: BettingPositionTheme;
}

const BettingPosition = ({
  label = "bet",
  theme = BettingPositionTheme.BLUE,
  winner = false,
  bet = 0,
}: BettingPositionProps) => {
  const bettingPositionClass = cn(styles.bettingPosition, styles[theme], {
    [styles.winner]: winner,
  });

  return (
    <div className={bettingPositionClass}>
      <div className={styles.betArea}>{bet !== 0 && <Bet bet={bet} />}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default BettingPosition;
