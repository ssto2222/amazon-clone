import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <a
          href="https://px.a8.net/svt/ejp?a8mat=35PZUF+C4ER76+3O26+5ZMCH"
          rel="nofollow"
        >
          <img
            border="0"
            width="468"
            height="60"
            alt=""
            src="https://www22.a8.net/svt/bgt?aid=191009463733&wid=001&eno=01&mid=s00000017115001006000&mc=1"
          />
        </a>
        <div>
          <h3>Hello, {user ? user.email : "guest"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
