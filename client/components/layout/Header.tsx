import React,{useContext} from 'react';
import styles from '../../styles/globals.module.css'
import Logo from '../../public/footloose.png'
import Image from 'next/image';
import { WindowScroll } from '../../context';
const Header = () => {
  const windowScroll = useContext(WindowScroll)
  console.log(windowScroll)
  return <div className={styles.headerWrapper}>
    <div className={!windowScroll?styles.headerContainer:styles.headerContainer1}>
    <div className={styles.headerLogo}>
      <Image src={Logo} alt="Logo" width="120px" height="60px"/>
    </div>
    </div>
    

  </div>;
};

export default Header;
