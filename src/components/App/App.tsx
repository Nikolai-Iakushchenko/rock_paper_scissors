import styles from "./App.module.css";
import ScorePanel from "../ScorePanel/ScorePanel.tsx";
import Game from "../Game/Game.tsx";

function App() {
  return (
    <div className={styles.app}>
      <ScorePanel />
      <Game />
    </div>
  );
}

export default App;
