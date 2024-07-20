import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
import InfoItem from "../InfoItem/InfoItem.tsx";
import MessagePanel from "../MessagePanel/MessagePanel.tsx";
import ControlPanel from "../ControlPanel/ControlPanel.tsx";
import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
import BettingPosition from "./BettingPosition/BettingPosition.tsx";

function App() {
  return (
    <div className={styles.app}>
      <InfoPanel>
        <InfoItem label={"balance"} value={5000} />
        <InfoItem label={"bet"} value={500} />
        <InfoItem label={"win"} value={500} />
      </InfoPanel>
      <Game>
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
            bet={500}
          />
          <BettingPosition
            label={"scissors"}
            theme={"red"}
            winner={false}
            bet={0}
          />
        </BettingPositionList>
        <ControlPanel />
      </Game>
    </div>
  );
}

export default App;
