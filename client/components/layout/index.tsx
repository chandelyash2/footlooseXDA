import React from 'react';
import Header from '../layout/Header'
import Foooter from '../layout/Footer'
import styles from '../../styles/globals.module.css'
interface ILayout {
  children: JSX.Element
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return <div className={styles.layoutContainer}>
    <Header />
    {children}
    <Foooter />
  </div>;
};

export default Layout;
