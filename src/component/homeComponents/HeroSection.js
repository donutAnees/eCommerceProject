import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
export default function HeroSection() {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_title}>
        <p>Every Keystroke Matters.</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link to={"/keyboards"}>
        <button className={styles.exploreButton}>
          Explore <span class="material-symbols-outlined">arrow_forward</span>
        </button>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://www.dareu.co.id/wp-content/uploads/2020/09/A87-Dream-6-1400x793.png"
          alt=""
        />
      </div>
    </section>
  );
}
