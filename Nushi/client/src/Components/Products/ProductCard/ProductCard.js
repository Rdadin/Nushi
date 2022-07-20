import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { changeAmmount } from "../../../actions/products";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const elements = product.description.split("+");

  return (
    <div
      className={`ProductCard ${
        product.category.split(" ")[0] === "Combo" ? "combo" : ""
      }`}
    >
      <div className="product-info">
        <div className="product-name">
          <h3>{product.name}</h3>
          <p>x{product.quantity}</p>
        </div>
        <div className="product-description">
          {product.category.split(" ")[0] === "Combo" ? (
            <p>
              {elements.map((value, index) => (
                <p className="product-description" key={index}>
                  {value}
                </p>
              ))}
            </p>
          ) : (
            <p>{product.description}</p>
          )}
        </div>
      </div>

      <div className="product-pricing">
        <div className="product-price">${product.price}</div>
        <div className="product-quantity">
          <button
            className="button-less"
            type="button"
            onClick={() => {
              dispatch(changeAmmount(product.name, "less"));
            }}
          >
            <FontAwesomeIcon
              icon={faMinus}
              style={{ fontSize: "1rem", color: "black" }}
            />
          </button>
          <div className="product-ammount">{product.selectedAmmount}</div>
          <button
            className="button-more"
            type="button"
            onClick={() => dispatch(changeAmmount(product.name, "more"))}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{ fontSize: "1rem", color: "black" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
