import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jLch1NRjL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Monitor"
            price={2000}
            image="https://m.media-amazon.com/images/I/71ErQqJkcRL._AC_SX569_.jpg"
            rating={4}
          />

          <Product
            id="1"
            title="The Monitor"
            price={2000}
            image="https://m.media-amazon.com/images/I/71ErQqJkcRL._AC_SX569_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="The Monitor"
            price={2000}
            image="https://m.media-amazon.com/images/I/71ErQqJkcRL._AC_SX569_.jpg"
            rating={4}
          />
          <Product
            id="1"
            title="The Monitor"
            price={2000}
            image="https://m.media-amazon.com/images/I/71ErQqJkcRL._AC_SX569_.jpg"
            rating={4}
          />
          <Product
            id="1"
            title="The Monitor"
            price={2000}
            image="https://m.media-amazon.com/images/I/71ErQqJkcRL._AC_SX569_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="The Monitor"
            price={2000}
            image="https://m.media-amazon.com/images/I/71ErQqJkcRL._AC_SX569_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
