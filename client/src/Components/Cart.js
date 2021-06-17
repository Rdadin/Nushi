import React from "react";
import ProductCard from "./Products/ProductCard/ProductCard";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-products">
      {!cart.length && (
        <p style={{ textAlign: "center", marginTop: "250px" }}>
          Por favor selecciona un producto!
        </p>
      )}

      {cart.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Cart;
