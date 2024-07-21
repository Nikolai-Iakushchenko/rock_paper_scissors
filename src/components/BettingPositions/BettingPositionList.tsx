import styles from "./BettngPositionList.module.css";
import { ReactElement, useState } from "react";

interface BettingPositionListProps {
  children: ReactElement | ReactElement[];
}

const BettingPositionList = ({ children }: BettingPositionListProps) => {
  const [bettingPositions, setBettingPositions] = useState({});

  return (
    <div className={styles.bettingPositionList}>
      {/*<div className={styles.bettingPositionContainer}>*/}
      {children}
      {/*</div>*/}
    </div>
  );
};

export default BettingPositionList;
