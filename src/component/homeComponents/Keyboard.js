import { Link } from "react-router-dom";
import styles from "./Keyboard.module.css";
export default function Keyboard() {
  const rows = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
    ["Space", "Backspace"],
  ];
  return (
    <div className={styles.keyboard_container}>
      <div className={styles.row}>
        {rows[0].map((key) => {
          return <button className={styles.key} key={key}>{key}</button>;
        })}
      </div>
      <div className={styles.row}>
        {rows[1].map((key) => {
          return <button className={styles.key} key={key}>{key}</button>;
        })}
      </div>
      <div className={styles.row}>
        {rows[2].map((key) => {
          return <button className={styles.key} key={key}>{key}</button>;
        })}
      </div>
      <div className={styles.row}>
        {rows[3].map((key) => {
          return <button className={styles.key} key={key}>{key}</button>;
        })}
      </div>
      <div className={styles.row}>
        <Link to={'/keyboards'} className={`${styles.spacebar} ${styles.key}`}>EXPLORE</Link>
      </div>
    </div>
  );
}
