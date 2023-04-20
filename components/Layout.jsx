import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Clerkie Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={title} />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
