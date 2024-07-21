import styles from "./BettngPositionList.module.css";
import {ReactElement} from "react";

interface BettingPositionListProps {
  children: ReactElement | ReactElement[];
}

const BettingPositionList = ({children}: BettingPositionListProps) => {
  return <div className={styles.bettingPositionList}>
    <div className={styles.bettingPositionContainer}>{children}</div>
  </div>;
};

export default BettingPositionList;
