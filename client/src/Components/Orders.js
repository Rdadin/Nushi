import React from "react";
import Order from "./Order";
import { useSelector } from "react-redux";

function Orders({ orderCategory, currentId, setCurrentId, orderSort }) {
  const orders = useSelector((state) => state.orders);

  const matchingOrders =
    orderCategory === "all"
      ? orders
      : orders.filter((prop) => prop.status === orderCategory);
  var sortedOrders = matchingOrders;
  if (orderSort === "creation") {
  } else {
    sortedOrders = matchingOrders.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  }

  return (
    <>
      {sortedOrders.map((order) => (
        <Order
          key={order._id}
          order={order}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
      ))}
    </>
  );
}

export default Orders;
