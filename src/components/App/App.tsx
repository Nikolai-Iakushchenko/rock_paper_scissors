import styles from "./App.module.css";
import InfoPanel from "../InfoPanel/InfoPanel.tsx";
import Game from "../Game/Game.tsx";

function App() {
  return (
    <div className={styles.app}>
      <InfoPanel />
      <Game />
    </div>
  );
}

export default App;
