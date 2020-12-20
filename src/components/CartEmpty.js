import React from "react";
import { Link } from "react-router-dom";
import "./CartEmpty.css";

const CartEmpty = () => {
  return (
    <div className="cartEmpty">
      <div className="cartEmpty__left">
        <img
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt=""
        />
      </div>
      <div className="cartEmpty__right">
        <h1>Your Amazon cart is Empty</h1>
        <p>shop today's deals</p>

        <Link to="/">
          <button className="cartEmpty__button">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
