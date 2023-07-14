import React from "react";
import styles from "./TrustedSection.module.css";

export default function TrustedSection() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Trusted by the best</h3>
      </div>
      <div className={styles.logoContainer}>
        <ul className={styles.imageList}>
          <li className={styles.imageItem}>
            <img
              src="https://i.pinimg.com/originals/61/d9/d7/61d9d71047f8c25fc9258b902af817f9.png"
              alt=""
            />
          </li>
          <li className={styles.imageItem}>
            <img
              src="https://www.svgrepo.com/show/303639/counter-strike-global-offensive-2-logo.svg"
              alt=""
            />
          </li>
          <li className={styles.imageItem}>
            <img
              src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo.png"
              alt=""
            />
          </li>
          <li className={styles.imageItem}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/763/186/original/valorant-logo-transparent-free-png.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
