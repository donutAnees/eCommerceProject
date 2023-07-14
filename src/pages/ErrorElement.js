import { useRouteError} from "react-router-dom";
import styles from "./ErrorElement.module.css";
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Error</h1>
      <p className={styles.message}>Sorry, an error occurred{error.message}</p>
    </div>
  );
}
