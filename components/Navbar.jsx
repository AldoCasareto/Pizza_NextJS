import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const listItems = [
    "HomePage",
    "Products",
    "Menu",
    "Events",
    "Blog",
    "Contact",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="call now"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>+1-800-123-4567</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Image src="/img/logo.png" alt="logo" width={160} height={69} />
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
