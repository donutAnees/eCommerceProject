import Keyboard from "./Keyboard";
import styles from "./HeroSection.module.css";
export default function HeroSection() {
  return (
    <section className={styles.hero_container}>
      <div>
        <input
          className={styles.hero_title}
          type="text"
          maxLength={33}
          defaultValue="Every Key Strokes Matters"
          autoFocus
        />
      </div>
      <div className={styles.keyboard}>
        <Keyboard></Keyboard>
      </div>
    </section>
  );
}
