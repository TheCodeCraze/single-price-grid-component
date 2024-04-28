import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.card}>
      <div className={styles["card-top"]}>
        <h1 className={styles.title}>Join our community</h1>
        <div className={styles.description}>
          <h2 className={styles.heading}>
            30-day, hassle-free money back guarantee
          </h2>
          <p className={styles.text}>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
      </div>
      <div className={styles["card-bottom-one"]}>
        <h2 className={styles.heading}>Monthly Subscription</h2>
        <div className={styles.price}>
          <p className={styles.value}>$29</p>
          <p className={styles.iteration}>per month</p>
        </div>
        <p className={styles.info}>Full access for less than $1 a day</p>
        <button className={styles.button}>Sign Up</button>
      </div>
      <div className={styles["card-bottom-two"]}>
        <h2 className={styles.heading}>Why Us</h2>
        <ul className={styles.points}>
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </main>
  );
};
