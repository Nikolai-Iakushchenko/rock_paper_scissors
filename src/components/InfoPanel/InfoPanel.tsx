import styles from "./InfoPanel.module.css";
import InfoBox from "../InfoBox/InfoBox.tsx";

interface InfoPanelProps {
  playersBalance: number;
  winSum: number;
  sumOfBets: number;
}

const InfoPanel = ({ playersBalance, winSum, sumOfBets }: InfoPanelProps) => {
  return (
    <div className={styles.infoPanel}>
      <InfoBox label={"balance"} value={playersBalance} />
      <InfoBox label={"bet"} value={sumOfBets} />
      <InfoBox label={"win"} value={winSum} />
    </div>
  );
};

export default InfoPanel;
