import styles from "./BettingPosition.module.css";
import cn from "classnames";
import Bet from "../../Bet/Bet.tsx";
import { BettingOption } from "../../BettingPositions/BettingPositionList.tsx";
import { BettingOptionTheme } from "../../../config/BettingOptions.ts";
// import { BETTING_POSITION_THEME } from "../../Game/Game.tsx";

// import type { Theme } from "../../Game/Game.tsx";
// export type Theme = "blue" | "green" | "red";

interface BettingPositionProps {
  label: BettingOption;
  winner: boolean;
  bet: number;
  theme: BettingOptionTheme;
  placeBet: ((label: BettingPositionProps["label"]) => void) | undefined;
}

const BettingPosition = ({
  label,
  theme = BettingOptionTheme.BLUE,
  winner = false,
  bet = 0,
  placeBet,
}: BettingPositionProps) => {
  const bettingPositionClass = cn(styles.bettingPosition, styles[theme], {
    [styles.winner]: winner,
  });

  // function handleClick(label: BettingPositionProps["label"]) {
  function handleClick(label: BettingOption) {
    if (typeof placeBet === "function") {
      placeBet(label);
    }
  }

  return (
    // <div onClick={() => handleClick(label)} className={bettingPositionClass}>
    <div onClick={() => handleClick(label)} className={bettingPositionClass}>
      <div className={styles.betArea}>{bet !== 0 && <Bet bet={bet} />}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default BettingPosition;
