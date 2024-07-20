import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
import InfoItem from "../InfoItem/InfoItem.tsx";

function App() {
  return (
    <div className={styles.app}>
      <InfoPanel>
        <InfoItem label={"balance"} value={1000} />
        <InfoItem label={"balance"} value={100} />
        <InfoItem label={"balance"} value={1} />
      </InfoPanel>
      <Game />
    </div>
  );
}

export default App;
