import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import Orders from "../Components/Orders";
import OrderForm from "../Components/OrderForm";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../actions/orders";
import { fillCart } from "../actions/cart";

function OrdersPage() {
  useEffect(() => {
    const el = document.querySelector(".loader-container");
    if (el) {
      setTimeout(() => {
        el.style.display = "none";
      }, 2000);
    }
  });
  const [currentId, setCurrentId] = useState(null);
  const products = useSelector((state) => state.products);
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
    const matchingProducts = products.filter(
      (prop) => prop.selectedAmmount >= 1
    );
    dispatch(fillCart(matchingProducts));
  }, [dispatch, products, orders]);
  const [orderCategory, setOrderCategory] = useState("all");
  const [orderSort, setOrderSort] = useState("creation");

  return (
    <div className="OrdersPage">
      <Title title={"ORDERS"} />
      <section className="orders">
        <div className="orders-preview">
          <div className="order-filter">
            <button
              onClick={() => setOrderCategory("all")}
              className={orderCategory === "all" ? "selected" : ""}
            >
              Todas
            </button>
            <button
              onClick={() => setOrderCategory("finished")}
              className={orderCategory === "finished" ? "selected" : ""}
            >
              Completadas
            </button>
            <button
              onClick={() => setOrderCategory("pending")}
              className={orderCategory === "pending" ? "selected" : ""}
            >
              Entrantes
            </button>
            <button
              onClick={() => setOrderCategory("confirmed")}
              className={orderCategory === "confirmed" ? "selected" : ""}
            >
              Confirmadas
            </button>
            <select onChange={(e) => setOrderSort(e.target.value)}>
              <option value="" selected disabled hidden>
                Ordenar
              </option>
              <option value="creation">Pedido</option>
              <option value="date">Fecha</option>
            </select>
          </div>
          <div className="orders-container">
            <Orders
              currentId={currentId}
              setCurrentId={setCurrentId}
              orderCategory={orderCategory}
              orderSort={orderSort}
            />
          </div>
        </div>
        <div className="orders-panel">
          <h2 style={{ marginBottom: "0.5rem", textDecoration: "underline" }}>
            {currentId ? "Editando pedido" : "Agregar Pedido"}
          </h2>
          <OrderForm currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </section>
    </div>
  );
}

export default OrdersPage;
