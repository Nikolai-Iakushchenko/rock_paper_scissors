import styles from "./BettngPositionList.module.css";
import BettingPosition, {
  BettingPositionTheme,
} from "../App/BettingPosition/BettingPosition.tsx";
import { BettingOption, BettingPositions } from "../Game/Game.tsx";

const MAX_NUMBER_OF_BETTING_POSITIONS = 2;
const BET_AMOUNT = 500;

interface BettingPositionListProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
  playersBalance: number;
  bettingPositions: BettingPositions;
  setBettingPositions: React.Dispatch<React.SetStateAction<BettingPositions>>;
}

const BettingPositionList = ({
  setPlayersBalance,
  playersBalance,
  bettingPositions,
  setBettingPositions,
}: BettingPositionListProps) => {
  function placeBet(betOption: BettingOption) {
    // player has less balance than available for bet
    if (playersBalance - BET_AMOUNT < 0) {
      return;
    }

    // Add new betting position
    if (
      Object.keys(bettingPositions).length < MAX_NUMBER_OF_BETTING_POSITIONS &&
      !bettingPositions[betOption]
    ) {
      setBettingPositions({ ...bettingPositions, [betOption]: BET_AMOUNT });
      setPlayersBalance((balance) => balance - BET_AMOUNT);
    }

    // Increase bet on existing position
    if (bettingPositions[betOption]) {
      setBettingPositions({
        ...bettingPositions,
        [betOption]: bettingPositions[betOption] + BET_AMOUNT,
      });
      setPlayersBalance((balance) => balance - BET_AMOUNT);
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
