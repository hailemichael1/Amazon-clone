import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/Layout/Layout";
import { db } from "../../Utility/firebase"
import { DataContext } from "../../Components/DataProvider/DataProvider";
import styles from "./Orders.module.css";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <LayOut>
      <section className={styles.order_container}>
        <div className={styles.order_box}>
          <h2>Your Orders</h2>

          {orders?.length == 0 && (
            <div
              style={{
                padding: "20px",
              }}
            >
              You Don't Have Orders Yet
            </div>
          )}

          {/* ordered Items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard
                        product={order}
                        flex={true}
                        key={order?.id}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
