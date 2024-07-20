import styles from "./InfoItem.module.css";

const InfoItem = ({ label = "info", value = 0 }) => {
  return (
    <div className={styles.infoItem}>
      <span className={styles.label}>{label}:&nbsp;</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default InfoItem;
