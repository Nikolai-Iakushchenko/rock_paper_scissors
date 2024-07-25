import styles from "./BettingPosition.module.css";
import cn from "classnames";
import Bet from "../../Bet/Bet.tsx";
import type { BettingOption } from "../../../config/BettingOptions.ts";
import { BettingOptionTheme } from "../../../config/BettingOptions.ts";

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

  function handleClick(label: BettingOption) {
    if (typeof placeBet === "function") {
      placeBet(label);
    }
  }

  return (
    <div onClick={() => handleClick(label)} className={bettingPositionClass}>
      <div className={styles.betArea}>{bet !== 0 && <Bet bet={bet} />}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default BettingPosition;
