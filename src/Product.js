import React from "react";
import "./Product.css";

const Product = ({ title, price, image }) => {
  return (
    <div className="product ">
      <div className="product__description">
        <span className="product__title">{title}</span>
        <span className="product__price">${price}</span>
        <span className="product__rating">
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
        </span>
      </div>
      <div className="product__image ">
        <img src={image} alt="" />
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
