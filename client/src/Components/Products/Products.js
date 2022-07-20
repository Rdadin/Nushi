import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";

function Products({ category }) {
  const products = useSelector((state) => state.products);

  const matchingProducts = products.filter(
    (prop) => prop.category === category
  );

  return (
    <div
      className={`card-container ${
        category.split(" ")[0] === "Combo" ? "combo-container" : ""
      }`}
    >
      {matchingProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Products;
