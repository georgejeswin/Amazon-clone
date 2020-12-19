import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import db from "../firebase";

function Home() {
  const [products, setProducts] = useState([]);
  const sliceProductsTop = products.slice(0, 2);
  const sliceProductsBottom = products.slice(2);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];
      snapshot.docs.map((doc) => {
        tempProducts.push({
          id: doc.id,
          product: doc.data(),
        });
      });
      setProducts(tempProducts);
    });
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__banner"></div>

        <div className="home__content">
          <div className="home__row">
            {sliceProductsTop.map((product) => (
              <Product
                key={product.id}
                title={product.product.title}
                price={product.product.price}
                rating={product.product.rating}
                image={product.product.image}
              />
            ))}
          </div>

          <div className="home__row">
            {sliceProductsBottom.map((product) => (
              <Product
                key={product.id}
                title={product.product.title}
                price={product.product.price}
                rating={product.product.rating}
                image={product.product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
