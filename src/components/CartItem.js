import React from "react";
import db from "../firebase";
import "./CartItem.css";

const CartItem = ({ id, title, price, image, quantiy }) => {
  const deleteItem = () => {
    db.collection("cart-items").doc(id).delete();
  };

  const changeQuantity = () => {};

  let options = [];

  for (let i = 1; i < Math.max(quantiy + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i}</option>);
  }
  return (
    <div className="cartItem">
      <hr />
      <div className="cartItem__items">
        <div className="cartItem__item">
          <div className="cartItem__image">
            <img src={image} alt="" />
          </div>
          <div className="cartItem__info">
            <div className="cartItem__title">{title}</div>
            <div className="cartItem__actions">
              <div className="cartItem__quantity">
                <select name="">{options}</select>
              </div>
              <div className="cartItem__delete">
                <button onClick={deleteItem}>Delete</button>
              </div>
            </div>
          </div>
          <div className="cartItem__price">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
