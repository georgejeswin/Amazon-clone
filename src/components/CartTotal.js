import React from "react";
import "./CartTotal.css";

const CartTotal = (props) => {
  console.log("cart total", props);

  const getCount = () => {
    let count = 0;
    props.cartItems.forEach((item) => {
      count += parseInt(item.cartItem.quantity);
    });
    console.log(count);
    return count;
  };

  const getTotalPrice = () => {
    let total = 0;
    props.cartItems.forEach((item) => {
      total += item.cartItem.price * item.cartItem.quantity;
    });
    return total;
  };
  return (
    <div className="cartTotal">
      <div className="cartTotal__info">
        <h3>
          Subtotal( {getCount()} Items) ${getTotalPrice()}
        </h3>
      </div>
      <div className="cartTotal__button">
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotal;
