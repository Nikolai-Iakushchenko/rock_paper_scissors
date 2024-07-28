import styles from "./BettngPositionList.module.css";
import BettingPosition from "../App/BettingPosition/BettingPosition.tsx";
import { BettingPositions, GameStage } from "../Game/Game.tsx";
import BettingOptions, { BettingOption } from "../../config/BettingOptions.ts";

const MAX_NUMBER_OF_BETTING_POSITIONS = 2;
const BET_AMOUNT = 500;

interface BettingPositionListProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
  playersBalance: number;
  bettingPositions: BettingPositions;
  setBettingPositions: React.Dispatch<React.SetStateAction<BettingPositions>>;
  gameStage: GameStage;
  playerChoice: BettingOption | null;
}

const BettingPositionList = ({
  setPlayersBalance,
  playersBalance,
  bettingPositions,
  setBettingPositions,
  gameStage,
  playerChoice,
}: BettingPositionListProps) => {
  function placeBet(betOption: BettingOption) {
    // Player has less balance than available for bet
    if (playersBalance - BET_AMOUNT < 0) {
      return;
    }

    // Add bet on new position
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
      {BettingOptions.map((option) => (
        <BettingPosition
          key={option.label}
          label={option.label}
          isPlayerChoice={
            playerChoice === option.label && gameStage === GameStage.FINISH
          }
          bet={bettingPositions[option.label] || 0}
          theme={option.theme}
          placeBet={gameStage === GameStage.START ? placeBet : undefined}
        />
      ))}
    </div>
  );
};

export default BettingPositionList;
