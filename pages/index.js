import Head from "next/head";
import axios from "axios";
import Image from "next/image";

import Featured from "../component/Featured";
import PizzaList from "../component/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza restaurant</title>
        <meta name="description" content="best pizza ever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
      {/* <Image src={"/img/pizzaa3.png"} layout="fill" alt="" /> */}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
