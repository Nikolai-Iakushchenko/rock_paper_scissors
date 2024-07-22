import styles from "./Game.module.css";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingDoneButton from "../BettingDoneButton/BettingDoneButton.tsx";
import { useState } from "react";

interface GameProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
  playersBalance: number;
}

export enum BettingOption {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

const Game = ({ setPlayersBalance, playersBalance }: GameProps) => {
  const [computerChoice, setComputerChoice] = useState<BettingOption | null>(
    null,
  );
  const [playerChoice, setPlayersChoice] = useState<BettingOption | null>(null);

  function bettingOptionsMatch() {
    setComputerChoice(BettingOption.PAPER);
    setPlayersChoice(BettingOption.SCISSORS);
  }

  function runGameRound() {
    //    run paper,scissors,rock match
    bettingOptionsMatch();
    //   compare computer vs player choice and find who won
  }

  return (
    <main className={styles.game}>
      <MessagePanel
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
