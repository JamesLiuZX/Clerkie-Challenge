import React from 'react';
import styles from '../styles/Header.module.css';

const Header = ({ title }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Header;
