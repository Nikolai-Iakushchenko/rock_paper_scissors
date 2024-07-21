import styles from "./Game.module.css";
// import { ReactElement } from "react";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
import BettingPosition from "../App/BettingPosition/BettingPosition.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingDoneButton from "../BettingDoneButton/BettingDoneButton.tsx";

const BETTING_POSITIONS = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

const BETTING_POSITION_THEME = {
  blue: "blue",
  green: "green",
  red: "red",
};

interface GameProps {
  setPlayersBalance: React.Dispatch<React.SetStateAction<number>>;
}

const Game = ({ setPlayersBalance }: GameProps) => {
  return (
    <main className={styles.game}>
      <MessagePanel></MessagePanel>
      <BettingPositionList>
        <BettingPosition
          label={BETTING_POSITIONS.rock}
          theme={BETTING_POSITION_THEME.blue}
          winner={false}
          bet={500}
        />
        <BettingPosition
          label={BETTING_POSITIONS.paper}
          theme={BETTING_POSITION_THEME.green}
          winner={true}
          bet={50000}
        />
        <BettingPosition
          label={BETTING_POSITIONS.scissors}
          theme={BETTING_POSITION_THEME.red}
          winner={false}
          bet={0}
        />
      </BettingPositionList>
      <ControlPanel>
        <BettingDoneButton setPlayersBalance={setPlayersBalance} />
      </ControlPanel>
    </main>
  );
};

export default Game;
