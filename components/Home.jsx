import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home</h2>
      <div className={styles.separator}></div>
      <p className={styles.welcome}>Welcome to the Clerkie Challenge!</p>
    </div>
  );
};

export default HomePage;
