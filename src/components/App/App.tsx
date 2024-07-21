import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
// import InfoItem from "../InfoItem/InfoItem.tsx";
// import MessagePanel from "../MessagePanel/MessagePanel.tsx";
// import ControlPanel from "../ControlPanel/ControlPanel.tsx";
// import BettingPositionList from "../BettingPositions/BettingPositionList.tsx";
// import BettingPosition from "./BettingPosition/BettingPosition.tsx";

function App() {
  return (
    <div className={styles.app}>
      <InfoPanel />
      <Game />
    </div>
  );
}

export default App;
