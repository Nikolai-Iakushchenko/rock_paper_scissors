import styles from "./BettngPositionList.module.css";
// import { useState } from "react";
import BettingPosition, {
  BettingPositionTheme,
} from "../App/BettingPosition/BettingPosition.tsx";
import type { PlayerAccount } from "../App/App.tsx";
import { BettingOption } from "../App/App.tsx";

const MAX_NUMBER_OF_BETTING_POSITIONS = 2;
const BET_AMOUNT = 500;

// export enum BettingOption {
//   ROCK = "rock",
//   PAPER = "paper",
//   SCISSORS = "scissors",
// }
//
// type BettingPositions = {
//   [BettingOption.ROCK]?: number;
//   [BettingOption.PAPER]?: number;
//   [BettingOption.SCISSORS]?: number;
// };

interface BettingPositionListProps {
  playerAccount: PlayerAccount;
  setPlayerAccount: React.Dispatch<React.SetStateAction<PlayerAccount>>;
}

const BettingPositionList = ({
  playerAccount,
  setPlayerAccount,
}: BettingPositionListProps) => {
  // const [bettingPositions, setBettingPositions] = useState(
  //   {} as BettingPositions,
  // );

  const { bettingPositions } = playerAccount;

  function placeBet(bettingOption: BettingOption) {
    // setPlayersBalance((balance) => balance - BET_AMOUNT);

    setPlayerAccount((state) => {
      console.log("state.balance", state.balance);

      if (
        state.balance - BET_AMOUNT < 0 ||
        Object.keys(state.bettingPositions).length >
          MAX_NUMBER_OF_BETTING_POSITIONS
      ) {
        console.log("if1");
        return state;
      }

      if (!state.bettingPositions[bettingOption]) {
        console.log("if2");
        return { ...state, [bettingOption]: BET_AMOUNT };
      }
      console.log("else");
      return state;
    });
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
        bet={bettingPositions[BettingOption.PAPER] || 0}
        placeBet={placeBet}
      />
      <BettingPosition
        label={BettingOption.SCISSORS}
        theme={BettingPositionTheme.RED}
        winner={false}
        bet={bettingPositions[BettingOption.SCISSORS] || 0}
        placeBet={placeBet}
      />
    </div>
  );
};

export default BettingPositionList;
