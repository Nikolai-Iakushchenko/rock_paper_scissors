import styles from "./InfoPanel.module.css";
import type { ReactElement } from "react";

const InfoPanel = ({ children }: { children: ReactElement }) => {
  return <div className={styles.infoPanel}>{children}</div>;
};

export default InfoPanel;
