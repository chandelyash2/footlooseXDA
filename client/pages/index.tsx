import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Logo from "../public/footloose.png";
const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.background}>
        <Layout>
          {/* <h1>Home</h1> */}
          <div className={styles.img}>
            <h2>Curious / Adventorous</h2>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
