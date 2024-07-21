import styles from "./InfoPanel.module.css";
// import type { ReactElement } from "react";
import InfoItem from "../InfoItem/InfoItem.tsx";

// interface InfoPanelProps {
//   // children: ReactElement | ReactElement[];
// }

const InfoPanel = () => {
  return (
    <div className={styles.infoPanel}>
      <InfoItem label={"balance"} value={5000} />
      <InfoItem label={"bet"} value={500} />
      <InfoItem label={"win"} value={500} />
    </div>
  );
};

export default InfoPanel;
