'use client'

import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../lib/StateProvider";
import { getBasketTotal } from "../lib/reducer";
import Link from "next/link";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const handleProceed = () => {
    if (basket.length > 0) {
      dispatch({
        type: "ADD_TO_HISTORY",
        items: basket,
      });

      dispatch({
        type: "CLEAR_BASKET",
      });
    }
  };

  return (
    <div className="subtotal">
      <div className="subtotal__content">
        <p className="subtotal__text">
          Subtotal ({basket?.length} items): <strong>${getBasketTotal(basket).toFixed(2)}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" className="checkbox" /> This order contains a gift
        </small>
      </div>
      {basket.length > 0 ? (
        <Link href="/thanks">
          <button className="proceed" onClick={handleProceed}>
            Proceed to Buy
          </button>
        </Link>
      ) : (
        <button className="proceed" disabled={true}>
          Proceed to Buy
        </button>
      )}
    </div>
  );
};

export default Subtotal;