import React, { useState } from "react";

const ItemListHeader = () => {
  const [desc, setDesc] = useState("Description");
  const [qty, setQty] = useState("Quantity");
  const [tax, setTax] = useState("Tax");
  const [unitPrice, setUnitPrice] = useState("Unit Price");
  const [totalPrice, setTotalPrice] = useState("Total Price");

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.className;
    switch (name) {
      case "cell-desc":
        setDesc(value);
        break;
      case "cell-qty":
        setQty(value);
        break;
      case "cell-tax":
        setTax(value);
        break;
      case "cell-unit-price":
        setUnitPrice(value);
        break;
      case "cell-total-price":
        setTotalPrice(value);
        break;
      default:
    }
  }

  return (
    <div className="item-header">
      <textarea
        className="cell-desc"
        width="50"
        rows="1"
        defaultValue={desc}
        onChange={handleChange}
      ></textarea>
      <textarea
        className="cell-qty"
        width="8"
        rows="1"
        defaultValue={qty}
        onChange={handleChange}
      ></textarea>
      <textarea
        className="cell-tax"
        width="7"
        rows="1"
        defaultValue={tax}
        onChange={handleChange}
      ></textarea>
      <textarea
        className="cell-unit-price"
        width="20"
        rows="1"
        defaultValue={unitPrice}
        onChange={handleChange}
      ></textarea>
      <textarea
        className="cell-total-price"
        width="20"
        rows="1"
        defaultValue={totalPrice}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export { ItemListHeader };
