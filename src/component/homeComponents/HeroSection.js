import Keyboard from "./Keyboard";
import styles from "./HeroSection.module.css";
export default function HeroSection() {

  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_title}>
        <p>
          "Life is full of <span className={styles.titleKey}>key</span> moments"
        </p>
      </div>
      <div className={styles.keyboard}>
        <Keyboard></Keyboard>
      </div>
    </section>
  );
}
