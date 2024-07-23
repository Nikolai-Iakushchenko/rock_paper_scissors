import styles from "./Game.module.css";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingDoneButton from "../BettingDoneButton/BettingDoneButton.tsx";
import { useState } from "react";

const PLAYING_DURATION = 1000;

interface GameProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
  playersBalance: number;
}

export type Option = "rock" | "paper" | "scissors";
export type GameStage = "start" | "playing" | "finish";

const Game = ({ setPlayersBalance, playersBalance }: GameProps) => {
  const [gameStage, setGameStage] = useState<GameStage>("start");
  const [computerChoice, setComputerChoice] = useState<Option | null>(null);
  const [playerChoice, setPlayersChoice] = useState<Option | null>(null);

  function chooseRandomOption(
    options: Option[] = ["rock", "scissors", "paper"],
  ): Option {
    return options[Math.floor(Math.random() * options.length)];
  }

  function bettingOptionsMatch() {
    setComputerChoice(chooseRandomOption());
    setPlayersChoice(chooseRandomOption());
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
