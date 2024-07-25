import styles from "./InfoPanel.module.css";
import InfoItem from "../InfoItem/InfoItem.tsx";

interface InfoPanelProps {
  playersBalance: number;
  winSum: number;
  sumOfBets: number;
}

const InfoPanel = ({ playersBalance, winSum, sumOfBets }: InfoPanelProps) => {
  return (
    <div className={styles.infoPanel}>
      <InfoItem label={"balance"} value={playersBalance} />
      <InfoItem label={"bet"} value={sumOfBets} />
      <InfoItem label={"win"} value={winSum} />
    </div>
  );
};

export default InfoPanel;
