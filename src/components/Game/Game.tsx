import styles from "./Game.module.css";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingDoneButton from "../BettingDoneButton/BettingDoneButton.tsx";
import { useState } from "react";

const PLAYING_DURATION = 1000;

export type Option = "rock" | "paper" | "scissors";
export type Tie = "tie";
export type GameStage = "start" | "playing" | "finish";

function playRockPaperScissors(choice1: Option, choice2: Option): Option | Tie {
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

interface GameProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
  playersBalance: number;
}

const Game = ({ setPlayersBalance, playersBalance }: GameProps) => {
  const [gameStage, setGameStage] = useState<GameStage>("start");
  const [computerChoice, setComputerChoice] = useState<Option | null>(null);
  const [playerChoice, setPlayersChoice] = useState<Option | null>(null);
  const [winner, setWinner] = useState<Option | Tie | null>(null);

  function chooseRandomOption(
    options: Option[] = ["rock", "scissors", "paper"],
  ): Option {
    return options[Math.floor(Math.random() * options.length)];
  }

  function bettingOptionsMatch() {
    const computerMove = chooseRandomOption();
    const playerMove = chooseRandomOption();

    setComputerChoice(computerMove);
    setPlayersChoice(playerMove);

    // return playRockPaperScissors(computerMove, playerMove);
    setWinner(playRockPaperScissors(computerMove, playerMove));
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
        winner={winner}
        gameStage={gameStage}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
      ></MessagePanel>
      <BettingPositionList
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
