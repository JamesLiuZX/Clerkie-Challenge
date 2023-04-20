import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/clerkielogo.png" alt="Clerkie logo" />
        <h3>Clerkie Challenge</h3>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={`${styles.link} ${isActive('/') && styles.active}`}>
                <img src="/homepage.svg" alt="Home" />
                Home
            </Link>
          </li>
          <li>
            <Link href="/friends" className={`${styles.link} ${isActive('/friends') && styles.active}`}>
                <img src="/friends.svg" alt="Friends" />
                Friends
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
