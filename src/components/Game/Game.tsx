import styles from "./Game.module.css";
// import { ReactElement } from "react";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
import BettingPosition from "../App/BettingPosition/BettingPosition.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";

// interface GameProps {
//   // children: ReactElement | ReactElement[];
// }

const Game = () => {
  return (
    <main className={styles.game}>
      <MessagePanel></MessagePanel>
      <BettingPositionList>
        <BettingPosition
          label={"rock"}
          theme={"blue"}
          winner={false}
          bet={500}
        />
        <BettingPosition
          label={"paper"}
          theme={"green"}
          winner={true}
          bet={50000}
        />
        <BettingPosition
          label={"scissors"}
          theme={"red"}
          winner={false}
          bet={0}
        />
      </BettingPositionList>
      <ControlPanel />
    </main>
  );
};

export default Game;
