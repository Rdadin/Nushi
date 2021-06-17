import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import Cart from "../Components/Cart";
import Products from "../Components/Products/Products";
import DeliveryForm from "../Components/DeliveryForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fillCart } from "../actions/cart";
import { resetAmmounts } from "../actions/products";

function PedidosPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const matchingProducts = products.filter(
      (prop) => prop.selectedAmmount >= 1
    );
    dispatch(fillCart(matchingProducts));
  }, [dispatch, products]);
  const [category, setCategory] = useState("Combo Coral");
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart
    .map((product) => product.price * product.selectedAmmount)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="PedidosPage">
      <Title title={"PEDIDOS"} />
      <section className="order-section">
        <section className="product-selection">
          <div className="categories">
            <button
              onClick={() => setCategory("Combo Coral")}
              className={category.split(" ")[0] === "Combo" ? "selected" : ""}
            >
              Tablas
            </button>
            <button
              onClick={() => setCategory("Urumaki Rolls")}
              className={category === "Urumaki Rolls" ? "selected" : ""}
            >
              Urumaki Rolls
            </button>
            <button
              onClick={() => setCategory("Veggie Rolls")}
              className={category === "Veggie Rolls" ? "selected" : ""}
            >
              Veggie Rolls
            </button>
            <button
              onClick={() => setCategory("Nigiri")}
              className={category === "Nigiri" ? "selected" : ""}
            >
              Nigiri
            </button>
            <button
              onClick={() => setCategory("Hot Rolls")}
              className={category === "Hot Rolls" ? "selected" : ""}
            >
              Hot Rolls
            </button>
            <button
              onClick={() => setCategory("Gyozas")}
              className={category === "Gyozas" ? "selected" : ""}
            >
              Gyozas
            </button>
          </div>
          {category.split(" ")[0] === "Combo" && (
            <div className="tablas">
              <button
                onClick={() => setCategory("Combo Coral")}
                className={category === "Combo Coral" ? "selected" : ""}
              >
                Combo Coral
              </button>
              <button
                onClick={() => setCategory("Combo Silver")}
                className={category === "Combo Silver" ? "selected" : ""}
              >
                Combo Silver
              </button>
              <button
                onClick={() => setCategory("Combo All Hot")}
                className={category === "Combo All Hot" ? "selected" : ""}
              >
                Combo All Hot
              </button>
              <button
                onClick={() => setCategory("Combo Black")}
                className={category === "Combo Black" ? "selected" : ""}
              >
                Combo Black
              </button>
              <button
                onClick={() => setCategory("Combo Green")}
                className={category === "Combo Green" ? "selected" : ""}
              >
                Combo Green
              </button>
            </div>
          )}
          <Products category={category} />
        </section>
        <section className="cart">
          <div className="cart-content">
            <div className="cart-container">
              <h2
                style={{ marginBottom: "0.5rem", textDecoration: "underline" }}
              >
                Carrito
              </h2>
              <Cart />
              <div className="cart-info">
                <button
                  className="clear-cart"
                  onClick={() => dispatch(resetAmmounts())}
                >
                  Vaciar carrito
                </button>
                <div className="price-total">{`Total: $${totalPrice}`}</div>
              </div>
            </div>
            <div className="order-info">
              <DeliveryForm />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default PedidosPage;
