import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log("cart count", props);
  const getCount = () => {
    let count = 0;
    props.cartItems.forEach((item) => {
      count += parseInt(item.cartItem.quantity);
    });
    return count;
  };
  return (
    <div>
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <img
              src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
              alt=""
            />
          </div>
        </Link>

        <div className="header__optionAddress">
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">Select Your Address</span>
          </div>
        </div>
        {/* searchbar */}
        <div className="header__search">
          <input
            type="text"
            placeholder="Enter the name of the Item..."
            className="header__searchInput"
          />
          <div className="header__searchIconContainer">
            <SearchIcon />
          </div>
        </div>
        <div className="header__navItems">
          {/* account */}
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Jeswin</span>
            <span className="header__optionLineTwo">Account & List </span>
          </div>
          {/* orders */}
          <div className="header__option">
            <span className="header__optionLineOne">Returns &</span>
            <span className="header__optionLineTwo">Orders </span>
          </div>
          {/*cart*/}
          <Link to="/cart">
            <div className="header__cart">
              <ShoppingBasketIcon />
              <span className="header__cartCount">{getCount()}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
