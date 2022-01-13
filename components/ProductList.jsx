import styles from "../styles/ProductList.module.css";
import PizzaCard from "./PizzaCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>the best pizza in town!</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel rem
        placeat natus, facere doloribus nihil molestias odio reprehenderit vero
        ut eaque porro possimus adipisci et cupiditate consectetur unde delectus
        minus, ipsa consequuntur optio alias sequi fugit? Eius unde nostrum
        doloremque velit iure? Perferendis sit temporibus vel quisquam fugit
        reiciendis veniam?
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default ProductList;
