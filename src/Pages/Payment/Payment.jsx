import React, { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import styles from "./Payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider';
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import ProductCard from "../../Components/Product/ProductCard"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
function Payment() {

     const [{ user, basket }, dispatch] = useContext(DataContext);
     const [cardError, setCardError] = useState(null);


    const totalItem = basket.reduce((amount, item) => {
      return  item.amount + amount;
    }, 0);

    const total = basket.reduce((amount, item) => {
      return item.price * item.amount + amount;
    }, 0);

     const stripe = useStripe();
     const elements = useElements();

     const handleChange = (e) => {
       e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
     };
  return (
    <Layout>
      {/*header*/}
      <div className={styles.payment_header}>CheckOut ({totalItem}) items</div>

      <section className={styles.payment_section}>
        {/* address */}
        <div className={styles.payment_flex}>
          <h3>Delivery Address</h3>
          <div>
            <div> {user?.email}</div>
            <div>123 react laen</div>
            <div> chicago, ti</div>
          </div>
        </div>
        <hr />

        {/* products */}
        <div className={styles.payment_flex}>
          <h3>Review items and Delevery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item?.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={styles.payment_flex}>
          <h3>Payment Methods</h3>
          <div className={styles.payment_card_container}>
            <div className={styles.payment_details}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* cardElement */}
                <CardElement onChange={handleChange} />

                {/* price */}
                <div className={styles.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>pey now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment
