import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import db from "./firebase";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    db.collection("cart-items").onSnapshot((snapshot) => {
      const tempCartItems = [];
      console.log(snapshot);
      snapshot.docs.map((doc) => {
        tempCartItems.push({
          id: doc.id,
          cartItem: doc.data(),
        });
      });
      setCartItems(tempCartItems);
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
