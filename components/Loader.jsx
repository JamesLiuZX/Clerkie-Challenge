import styles from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles['loading-row']}>
      <div className={styles['loading-avatar']} />
      <div className={styles['loading-details']}>
        <div className={styles['loading-name']} />
        <div className={styles['loading-status']} />
        <div className={styles['loading-email']} />
        <div className={styles['loading-phone']} />
      </div>
    </div>
  );
};

export default Loader;