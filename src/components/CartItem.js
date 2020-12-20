import React from "react";
import db from "../firebase";
import "./CartItem.css";

const CartItem = ({ id, title, price, image, quantity }) => {
  const deleteItem = () => {
    db.collection("cart-items").doc(id).delete();
  };

  const changeQuantity = (newQuantity) => {
    db.collection("cart-items")
      .doc(id)
      .update({
        quantity: parseInt(newQuantity),
      });
  };
  let options = [];

  for (let i = 1; i < Math.max(quantity + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i}</option>);
  }
  console.log("opt....>>>>", options.value);
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
                <select
                  onChange={(e) => changeQuantity(e.target.value)}
                  value={quantity}
                >
                  {options}
                </select>
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
