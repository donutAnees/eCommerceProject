import styles from './Loading.module.css';
export default function Loading() {
  return (
    <div className={styles.loading}>
      <div>Loading</div>
      <span className={styles.loadingAnimation}></span>
    </div>
  );
}
