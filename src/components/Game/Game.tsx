import styles from "./Game.module.css";
// import { ReactElement } from "react";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
// import type { Theme } from "../App/BettingPosition/BettingPosition.tsx";
import BettingPosition, {
  BettingPositionTheme,
} from "../App/BettingPosition/BettingPosition.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingDoneButton from "../BettingDoneButton/BettingDoneButton.tsx";

// export type Theme = "blue" | "green" | "red";

const BETTING_POSITIONS = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

// export const BETTING_POSITION_THEME: {
//   red: string;
//   green: string;
//   blue: string
// } = {
//   blue: "blue",
//   green: "green",
//   red: "red",
// };

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
          theme={BettingPositionTheme.BLUE}
          winner={false}
          bet={500}
        />
        <BettingPosition
          label={BETTING_POSITIONS.paper}
          theme={BettingPositionTheme.GREEN}
          winner={true}
          bet={50000}
        />
        <BettingPosition
          label={BETTING_POSITIONS.scissors}
          theme={BettingPositionTheme.RED}
          winner={false}
          bet={0}
        />
      </BettingPositionList>
      <ControlPanel>
        <BettingDoneButton />
      </ControlPanel>
    </main>
  );
};

export default Game;
