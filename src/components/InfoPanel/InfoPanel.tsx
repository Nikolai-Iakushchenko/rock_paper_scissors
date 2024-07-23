import styles from "./InfoPanel.module.css";
// import type { ReactElement } from "react";
import InfoItem from "../InfoItem/InfoItem.tsx";

interface InfoPanelProps {
  playersBalance: number;
}

const InfoPanel = ({ playersBalance }: InfoPanelProps) => {
  return (
    <div className={styles.infoPanel}>
      <InfoItem label={"balance"} value={playersBalance} />
      <InfoItem label={"bet"} value={0} />
      <InfoItem label={"win"} value={0} />
    </div>
  );
};

export default InfoPanel;
