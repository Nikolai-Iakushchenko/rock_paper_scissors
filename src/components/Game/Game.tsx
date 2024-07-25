import styles from "./Game.module.css";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositionList/BettingPositionList.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingDoneButton from "../BettingDoneButton/BettingDoneButton.tsx";
import { useEffect, useState } from "react";
import calculateCoefficient from "../../utils/CalculateCoefficient.ts";
import { BettingOption } from "../../config/BettingOptions.ts";
import calculateTieReturn from "../../utils/CalculateTieReturn.ts";

const PLAYING_DURATION = 3000;

export type Tie = "tie";
export type GameStage = "start" | "playing" | "finish";

function playRockPaperScissors(
  choice1: BettingOption,
  choice2: BettingOption,
): BettingOption | Tie {
  const comparison = {
    rock: { weakTo: BettingOption.PAPER, strongTo: BettingOption.SCISSORS },
    paper: { weakTo: BettingOption.SCISSORS, strongTo: BettingOption.ROCK },
    scissors: { weakTo: BettingOption.ROCK, strongTo: BettingOption.PAPER },
  };

  if (comparison[choice1].strongTo === choice2) {
    return choice1;
  }

  if (comparison[choice1].weakTo === choice2) {
    return choice2;
  }

  return "tie";
}

export type BettingPositions = {
  rock?: number;
  paper?: number;
  scissors?: number;
};

interface GameProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
  playersBalance: number;
  setWin: React.Dispatch<React.SetStateAction<number>>;
  winSum: number;
  setSumOfBets: React.Dispatch<React.SetStateAction<number>>;
}

const Game = ({
  setPlayersBalance,
  playersBalance,
  setWin,
  winSum,
  setSumOfBets,
}: GameProps) => {
  const [gameStage, setGameStage] = useState<GameStage>("start");
  const [computerChoice, setComputerChoice] = useState<BettingOption | null>(
    null,
  );
  const [playerChoice, setPlayersChoice] = useState<BettingOption | null>(null);
  const [winningOption, setWinningOption] = useState<
    BettingOption | Tie | null
  >(null);
  const [bettingPositions, setBettingPositions] = useState(
    {} as BettingPositions,
  );

  const hasPlayerBetOnWinningOption =
    playerChoice !== null && Object.hasOwn(bettingPositions, playerChoice);

  const hasPlayerWonGame =
    playerChoice !== null && winningOption === playerChoice;

  const hasPlayerWonBet = hasPlayerWonGame && hasPlayerBetOnWinningOption;

  const playerWiningBet =
    hasPlayerWonBet && playerChoice && bettingPositions[playerChoice]
      ? bettingPositions[playerChoice]
      : 0;
  const numberOfBets = Object.keys(bettingPositions).length;
  const coefficient = calculateCoefficient(numberOfBets);
  const playerWinSum = playerWiningBet * coefficient;

  const isBettingDoneButtonDisabled =
    numberOfBets === 0 || gameStage === "playing";

  const sumOfBets = Object.values(bettingPositions).reduce((a, b) => a + b, 0);

  useEffect(() => {
    setWin(playerWinSum);
  }, [playerWinSum]);

  useEffect(() => {
    setSumOfBets(sumOfBets);
  }, [bettingPositions]);

  function runGameRound() {
    setGameStage("playing");

    const computerMove = chooseRandomOption();
    const playerMove = chooseRandomOption();
    const winningOption = playRockPaperScissors(computerMove, playerMove);

    setComputerChoice(computerMove);
    setPlayersChoice(playerMove);
    setWinningOption(winningOption);

    setTimeout(() => setGameStage("finish"), PLAYING_DURATION);
  }

  function resetGame() {
    if (winningOption === "tie" && hasPlayerBetOnWinningOption) {
      winSum = calculateTieReturn(numberOfBets, sumOfBets);
    }

    setPlayersBalance(playersBalance + winSum);
    setBettingPositions({});
    setGameStage("start");
    setWinningOption(null);
  }

  const bettingDoneButtonHandler =
    gameStage === "finish" ? resetGame : runGameRound;

  function chooseRandomOption(
    options: BettingOption[] = [
      BettingOption.ROCK,
      BettingOption.SCISSORS,
      BettingOption.PAPER,
    ],
  ): BettingOption {
    return options[Math.floor(Math.random() * options.length)];
  }

  return (
    <main className={styles.game}>
      <MessagePanel
        winSum={winSum}
        winningOption={winningOption}
        gameStage={gameStage}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
      ></MessagePanel>
      <BettingPositionList
        winningOption={winningOption}
        gameStage={gameStage}
        bettingPositions={bettingPositions}
        setBettingPositions={setBettingPositions}
        playersBalance={playersBalance}
        setPlayersBalance={setPlayersBalance}
      ></BettingPositionList>
      <ControlPanel>
        <BettingDoneButton
          gameStage={gameStage}
          bettingDoneButtonHandler={bettingDoneButtonHandler}
          isBettingDoneButtonDisabled={isBettingDoneButtonDisabled}
        />
      </ControlPanel>
    </main>
  );
};

export default Game;
