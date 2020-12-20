import React from "react";
import db from "../firebase";
import "./Product.css";

const Product = ({ title, price, image, id }) => {
  const addToCart = () => {
    const cartItem = db.collection("cart-items").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        cartItem.set({
          title: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };
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
        <button onClick={addToCart}>Add to cart </button>
      </div>
    </div>
  );
};

export default Product;
