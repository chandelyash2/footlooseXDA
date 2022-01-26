import React, { useContext } from "react";
import styles from "../../styles/globals.module.css";
import Logo from "../../public/logo-black.webp";
import Logo1 from "../../public/logo-white.webp";

import Image from "next/image";
import { WindowScroll } from "../../context";

interface IText {
  label: String;
}
const Header = () => {
  const windowScroll = useContext(WindowScroll);
  console.log(windowScroll);

  const TextField: React.FC<IText> = ({ label }) => {
    return (
      <h3
        className={
          !windowScroll ? styles.headerContentText : styles.headerContentText1
        }
      >
        {label}
      </h3>
    );
  };
  return (
    <div
      className={
        !windowScroll ? styles.headerContainer : styles.headerContainer1
      }
    >
      <div className={styles.headerWrapper}>
        <Image
          src={!windowScroll ? Logo1 : Logo}
          alt="Logo"
          width="120px"
          height="60px"
        />
        <TextField label="Explore" />
        <TextField label="Places" />
        <TextField label="Blog" />
        <TextField label="About" />
      </div>
    </div>
  );
};

export default Header;
