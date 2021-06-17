import React from "react";
import ProductCard from "./Products/ProductCard/ProductCard";
import { useSelector } from "react-redux";

function OrderCart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-products">
      {!cart.length && (
        <p style={{ textAlign: "center", marginTop: "120px" }}>
          Sin productos seleccionados
        </p>
      )}

      {cart.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default OrderCart;
