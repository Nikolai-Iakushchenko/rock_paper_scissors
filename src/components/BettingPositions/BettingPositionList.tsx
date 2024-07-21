import styles from "./BettngPositionList.module.css";
import { useState } from "react";
import BettingPosition, {
  BettingPositionTheme,
} from "../App/BettingPosition/BettingPosition.tsx";

const MAX_NUMBER_OF_BETTING_POSITIONS = 2;
const BET_AMOUNT = 500;

export enum BettingOption {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

type BettingPositions = {
  [BettingOption.ROCK]?: number;
  [BettingOption.PAPER]?: number;
  [BettingOption.SCISSORS]?: number;
};

interface BettingPositionListProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
}

const BettingPositionList = ({
  setPlayersBalance,
}: BettingPositionListProps) => {
  const [bettingPositions, setBettingPositions] = useState(
    {} as BettingPositions,
  );

  function placeBet(betOption: BettingOption) {
    if (
      Object.keys(bettingPositions).length < MAX_NUMBER_OF_BETTING_POSITIONS
    ) {
      setPlayersBalance((balance) => balance - BET_AMOUNT);
      setBettingPositions((state) => {
        if (state[betOption]) {
          return { ...state, [betOption]: state[betOption] + BET_AMOUNT };
        }
        return { ...state, [betOption]: BET_AMOUNT };
      });
    }
  }

  return (
    <div className={styles.bettingPositionList}>
      <BettingPosition
        label={BettingOption.ROCK}
        theme={BettingPositionTheme.BLUE}
        winner={false}
        bet={bettingPositions[BettingOption.ROCK] || 0}
        placeBet={placeBet}
      />
      <BettingPosition
        label={BettingOption.PAPER}
        theme={BettingPositionTheme.GREEN}
        winner={true}
        bet={50000}
        placeBet={placeBet}
      />
      <BettingPosition
        label={BettingOption.SCISSORS}
        theme={BettingPositionTheme.RED}
        winner={false}
        bet={0}
        placeBet={placeBet}
      />
    </div>
  );
};

export default BettingPositionList;
