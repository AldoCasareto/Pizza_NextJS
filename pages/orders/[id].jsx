import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const tableHeaders = ["Order ID", "Customer", "Address", "Total"];

  const status = 0;

  const statusProgress = (index) => {
    if (index - status < 1) return styles.paid;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              {tableHeaders.map((header, index) => (
                <th key={index} className={styles.th}>
                  {header}
                </th>
              ))}
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>232323232</span>
              </td>
              <td>
                <span className={styles.name}>John Doe </span>
              </td>
              <td>
                <span className={styles.address}>
                  Manuel Tovar 605, Miraflores
                </span>
              </td>

              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusProgress(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checked}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusProgress(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checked}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusProgress(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On-Route</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checked}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusProgress(3)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checked}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
