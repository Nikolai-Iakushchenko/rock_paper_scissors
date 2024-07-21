import styles from "./BettingPosition.module.css";
import cn from "classnames";
import Bet from "../../Bet/Bet.tsx";
import { BettingOption } from "../../BettingPositions/BettingPositionList.tsx";
// import { BETTING_POSITION_THEME } from "../../Game/Game.tsx";

// import type { Theme } from "../../Game/Game.tsx";
// export type Theme = "blue" | "green" | "red";

export enum BettingPositionTheme {
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
}

interface BettingPositionProps {
  label: BettingOption;
  winner: boolean;
  bet: number;
  theme: BettingPositionTheme;
  placeBet: (label: BettingPositionProps["label"]) => void;
}

const BettingPosition = ({
  label,
  theme = BettingPositionTheme.BLUE,
  winner = false,
  bet = 0,
  placeBet,
}: BettingPositionProps) => {
  const bettingPositionClass = cn(styles.bettingPosition, styles[theme], {
    [styles.winner]: winner,
  });

  // function handleClick(label: BettingPositionProps["label"]) {
  function handleClick(label: BettingOption) {
    placeBet(label);
  }

  return (
    <div onClick={() => handleClick(label)} className={bettingPositionClass}>
      <div className={styles.betArea}>{bet !== 0 && <Bet bet={bet} />}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default BettingPosition;
