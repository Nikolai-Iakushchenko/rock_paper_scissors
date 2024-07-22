import styles from "./InfoPanel.module.css";
// import type { ReactElement } from "react";
import InfoItem from "../InfoItem/InfoItem.tsx";
import type { PlayerAccount } from "../App/App.tsx";

interface InfoPanelProps {
  playerAccount: PlayerAccount;
}

const InfoPanel = ({ playerAccount }: InfoPanelProps) => {
  const { balance } = playerAccount;

  return (
    <div className={styles.infoPanel}>
      <InfoItem label={"balance"} value={balance} />
      <InfoItem label={"bet"} value={500} />
      <InfoItem label={"win"} value={500} />
    </div>
  );
};

export default InfoPanel;
