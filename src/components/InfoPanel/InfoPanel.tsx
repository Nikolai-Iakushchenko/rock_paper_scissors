import styles from "./InfoPanel.module.css";
// import type { ReactElement } from "react";
import InfoItem from "../InfoItem/InfoItem.tsx";

interface InfoPanelProps {
  playersBalance: number;
  win: number;
}

const InfoPanel = ({ playersBalance, win }: InfoPanelProps) => {
  console.log("win in InfoPanel", win);
  return (
    <div className={styles.infoPanel}>
      <InfoItem label={"balance"} value={playersBalance} />
      <InfoItem label={"bet"} value={0} />
      <InfoItem label={"win"} value={win} />
    </div>
  );
};

export default InfoPanel;
