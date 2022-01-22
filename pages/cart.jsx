import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

  const tableHeaders = [
    "Product",
    "Name",
    "Extras",
    "Price",
    "Quantity",
    "Total",
  ];

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={async (data, actions) => {
            const orderId = await actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            });
            return orderId;
          }}
          onApprove={async function (data, actions) {
            const details = await actions.order.capture();
            const shipping = details.purchase_units[0].shipping;
            createOrder({
              customer: shipping.name.full_name,
              address: shipping.address.address_line_1,
              total: cart.total,
              method: 1,
            });
          }}
        />
      </>
    );
  };

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
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payButton}>Cash on delivery</button>
               <PayPalScriptProvider
              options={{
                "client-id": "test",
                components: "buttons",
                currency: "USD",
                "disable-funding": "credit,card,p24",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
            </div>
           
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
