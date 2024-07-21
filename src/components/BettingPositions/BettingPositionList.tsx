import styles from "./BettngPositionList.module.css";
import { useState } from "react";
import BettingPosition, {
  BettingPositionTheme,
} from "../App/BettingPosition/BettingPosition.tsx";

// interface BettingPositionListProps {
//   // children: ReactElement | ReactElement[];
// }

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

const BettingPositionList = () => {
  const [bettingPositions, setBettingPositions] = useState<BettingPositions>(
    {},
  );

  function placeBet(betOption: BettingOption) {
    setBettingPositions({ [betOption]: 500 });
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
