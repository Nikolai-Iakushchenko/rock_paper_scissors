import styles from "./InfoPanel.module.css";
import type { ReactElement } from "react";

interface InfoPanelProps {
  children: ReactElement | ReactElement[];
}

const InfoPanel = ({ children }: InfoPanelProps) => {
  return <div className={styles.infoPanel}>{children}</div>;
};

export default InfoPanel;
