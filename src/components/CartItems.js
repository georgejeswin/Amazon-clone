import React from "react";
import "./CartItems.css";
import CartItem from "./CartItem";

const CartItems = ({ cartItems }) => {
  return (
    <div className="cartItems">
      <h1>Shopping Cart</h1>
      <div className="cartItems__items">
        {cartItems.map((item) => (
          <CartItem
            id={item.id}
            title={item.cartItem.title}
            image={item.cartItem.image}
            price={item.cartItem.price}
            quantity={item.cartItem.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
