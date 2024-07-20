import styles from "./Game.module.css";
import { ReactElement } from "react";

interface GameProps {
  children: ReactElement | ReactElement[];
}

const Game = ({ children }: GameProps) => {
  return <main className={styles.game}>{children}</main>;
};

export default Game;
