import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";
import InfoItem from "../InfoItem/InfoItem.tsx";

function App() {
  return (
    <div className={styles.app}>
      <InfoPanel>
        <InfoItem label={"balance"} value={"XXXX"} />
        <InfoItem label={"balance"} value={"XXXX"} />
        <InfoItem label={"balance"} value={"XXXX"} />
      </InfoPanel>
      <Game />
    </div>
  );
}

export default App;
