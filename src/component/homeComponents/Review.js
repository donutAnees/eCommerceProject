import styles from "./Review.module.css";

const review = [
  {
    quoteText:
      "Your keyboard website is a gamer's dream come true. The collection is impressive, with a diverse range of keyboards to suit every preference. The fast delivery ensures quick upgrades, while the user-friendly interface makes browsing a pleasure. A top-notch destination for keyboard enthusiasts!",
    authorImage:
      " https://www.nicepng.com/png/detail/241-2418244_lewis-hamilton-looking-up-png-lewis-hamilton-white.png",
    authorName: "LEWIS HAMILTON",
  },
];

export default function Review() {
  return (
    <div className={styles.container}>
      <div className={styles.reviewContainer}>
        <div className={styles.review}>
          <div className={styles.quotes}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2/2997.png"
              alt=""
            />
          </div>
          <p>{review[0].quoteText}</p>
          <h6>{review[0].authorName}</h6>
        </div>
        <div className={styles.author}>
          <img src={review[0].authorImage} alt="" />
        </div>
      </div>
    </div>
  );
}
