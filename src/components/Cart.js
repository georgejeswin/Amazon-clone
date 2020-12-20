import React from "react";
import "./Cart.css";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const Cart = (props) => {
  console.log("cart length>>>>", props.cartItems);
  return (
    <div className="cart">
      {props.cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <CartItems cartItems={props.cartItems} />
          <CartTotal cartItems={props.cartItems} />
        </>
      )}
    </div>
  );
};

export default Cart;
