import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <p>
              <label className="subtotal__gift" for="chkbox1">
                <input type="checkbox" id="chkbox1" />

                <small>This order contains a gift</small>
              </label>
            </p>
          </>
        )}
        decimalScale={0}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"¥"}
      />
      <button type="">レジに進む</button>
    </div>
  );
}

export default Subtotal;
