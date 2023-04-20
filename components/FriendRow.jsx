import styles from '../styles/FriendRow.module.css';

const FriendRow = ({ friend }) => {
  const statusClass = friend.status.toLowerCase().split(' ').join('-');
  return (
    <div className={`${styles['friend-row']} ${styles[friend.status.replace(/ /g, '-')]}`}>
      <div className={styles['name-status']}>
        <span className={styles['friend-name']}>{friend.name}</span>
        <span className={`${styles.status} ${styles[statusClass]}`}>{friend.status}</span>
      </div>
      <div className={styles['email-phone']}>
        <span className={styles['friend-email']}>{friend.email}</span>
        <span className={styles.ellipsis}>&bull;</span>
        <span className={styles['friend-number']}>{friend.phone}</span>
      </div>
    </div>
  );
};

export default FriendRow;
