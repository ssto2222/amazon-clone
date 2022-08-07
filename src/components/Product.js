import React from "react";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log(basket);
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>¥</small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span className="rating__star" role="img" aria-label="img">
                ⭐️
              </span>
            ))}
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} type="">
        カートに追加する
      </button>
    </div>
  );
}

export default Product;
