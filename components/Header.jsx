import React from 'react';
import styles from '../styles/Header.module.css';

const TopHeader = ({ title }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default TopHeader;
