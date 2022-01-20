import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const tableHeaders = [
    "Product",
    "Name",
    "Extras",
    "Price",
    "Quantity",
    "Total",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            {tableHeaders.map((header, index) => (
              <th key={index} className={styles.th}>
                {header}
              </th>
            ))}
          </tr>
          {cart.items.map((item) => (
            <tr key={item._id} className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src={item.imageUrl}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>{item.title}</span>
              </td>
              <td>
                <span className={styles.extras}>
                  {item.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}</span>
                  ))}
                </span>
              </td>
              <td>
                <span className={styles.price}>{item.price}</span>
              </td>
              <td>
                <span className={styles.quantity}>{item.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>
                  {item.price * item.quantity}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
