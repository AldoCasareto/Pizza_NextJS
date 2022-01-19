import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ pizzaList }) {
  console.log(pizzaList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="best pizza in berlin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList pizzaList={pizzaList} />
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
