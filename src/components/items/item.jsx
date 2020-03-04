import React, { useState, useContext } from "react";
import { ListContext } from "./ListContext";
import {
  checkItemNumberField,
  calculatePrice,
  findIndex,
  floatPrice
} from "../utilities/val";

const Item = props => {
  let { objId } = props;
  let { item } = props;

  const [qty, setQty] = useState("");
  const [tax, setTax] = useState("");
  const [price, setPrice] = useState("");

  const { data, dispatch } = useContext(ListContext);

  let handleDesc = ev => {
    let value = ev.target.value;
    let index = findIndex(ev, data);
    dispatch({ type: "ADD_DESC", index, value });
  };

  let handleQty = ev => {
    let value = ev.target.value;
    if (checkItemNumberField(value) && value >= 0) {
      let index = findIndex(ev, data);
      setQty(value);
      let totalValue = calculatePrice(value, price, tax);
      dispatch({ type: "ADD_QTY", index, value, totalValue });
    }
  };

  let handleTax = ev => {
    let value = ev.target.value;
    if (checkItemNumberField(value) && value >= 0 && value <= 100) {
      let index = findIndex(ev, data);
      setTax(value);
      let totalValue = calculatePrice(qty, price, value);
      dispatch({ type: "ADD_TAX", index, value, totalValue });
    }
  };

  let handlePrice = ev => {
    let value = ev.target.value;
    if (checkItemNumberField(value) && value >= 0) {
      let index = findIndex(ev, data);
      let fValue = floatPrice(value);
      setPrice(fValue);
      let totalValue = calculatePrice(qty, value, tax);
      dispatch({ type: "ADD_PRICE", index, fValue, totalValue });
    }
  };

  function handleRemoveClick(ev) {
    ev.preventDefault();
    let index = findIndex(ev, data);
    dispatch({ type: "REMOVE_ITEM", index });
  }

  return (
    <li className="item" key={objId} id={item.id}>
      <input
        type="text"
        className="cell-desc"
        width="50"
        value={item.Description}
        onChange={handleDesc}
      />
      <input
        className="cell-qty"
        width="8"
        value={item.Quantity}
        onChange={handleQty}
      />
      <input
        className="cell-tax"
        width="7"
        value={item.Tax}
        onChange={handleTax}
      />
      <input
        className="cell-unit-price"
        width="20"
        value={item.Price}
        onChange={handlePrice}
      />
      <input
        className="cell-total-price"
        width="20"
        value={item.Total}
        readOnly={true}
      />
      <button
        key={Math.floor(Math.random() * 100 + 1)}
        className="remove-button"
        onClick={handleRemoveClick}
      >
        X
      </button>
    </li>
  );
};

export { Item };
