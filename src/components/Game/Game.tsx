import styles from "./Game.module.css";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingDoneButton from "../BettingDoneButton/BettingDoneButton.tsx";
import { useState } from "react";

const PLAYING_DURATION = 1000;

// export type BettingOption = "rock" | "paper" | "scissors";
export enum BettingOption {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

export type Tie = "tie";
export type GameStage = "start" | "playing" | "finish";

function playRockPaperScissors(
  choice1: BettingOption,
  choice2: BettingOption,
): BettingOption | Tie {
  const comparison = {
    rock: { weakTo: "paper", strongTo: "scissors" },
    paper: { weakTo: "scissors", strongTo: "rock" },
    scissors: { weakTo: "rock", strongTo: "paper" },
  };

  if (comparison[choice1].strongTo === choice2) {
    return choice1;
  }

  if (comparison[choice1].weakTo === choice2) {
    return choice2;
  }

  return "tie";
}

// export enum BettingOption {
//   ROCK = "rock",
//   PAPER = "paper",
//   SCISSORS = "scissors",
// }

export type BettingPositions = {
  rock?: number;
  paper?: number;
  scissors?: number;
};

interface GameProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
  playersBalance: number;
}

const Game = ({ setPlayersBalance, playersBalance }: GameProps) => {
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

  function chooseRandomOption(
    options: BettingOption[] = ["rock", "scissors", "paper"],
  ): BettingOption {
    return options[Math.floor(Math.random() * options.length)];
  }

  function bettingOptionsMatch() {
    const computerMove = chooseRandomOption();
    const playerMove = chooseRandomOption();

    setComputerChoice(computerMove);
    setPlayersChoice(playerMove);

    setWinningOption(playRockPaperScissors(computerMove, playerMove));
  }

  function runGameRound() {
    setGameStage("playing");
    //    run paper,scissors,rock match
    bettingOptionsMatch();
    //   compare computer vs player choice and find who won
    setTimeout(() => setGameStage("finish"), PLAYING_DURATION);
  }

  return (
    <main className={styles.game}>
      <MessagePanel
        winner={winningOption}
        gameStage={gameStage}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
      ></MessagePanel>
      <BettingPositionList
        bettingPositions={bettingPositions}
        setBettingPositions={setBettingPositions}
        playersBalance={playersBalance}
        setPlayersBalance={setPlayersBalance}
      ></BettingPositionList>
      <ControlPanel>
        <BettingDoneButton runGameRound={runGameRound} />
      </ControlPanel>
    </main>
  );
};

export default Game;
