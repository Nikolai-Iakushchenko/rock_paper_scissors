import styles from "./InfoPanel.module.css";

const InfoPanel = ({ children }) => {
  return <div className={styles.infoPanel}>{children}</div>;
};

export default InfoPanel;
