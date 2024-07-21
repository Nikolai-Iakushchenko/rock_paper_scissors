import { ReactElement } from "react";
import styles from "./ControlPanel.module.css";

interface ControlPanelProps {
  children: ReactElement | ReactElement[];
}

const ControlPanel = ({ children }: ControlPanelProps) => {
  return <div className={styles.controlPanel}>{children}</div>;
};

export default ControlPanel;
