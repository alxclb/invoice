import React, { useContext, useState } from "react";
import { ListContext } from "./ListContext";
import { checkItemNumberField, calculatePrice } from "../utilities/val";

const Sum = () => {
  const { data } = useContext(ListContext);

  //value fields
  const [addTax, setAddTax] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  let sumArr = data.map(item => item.Total);
  let sum = sumArr.reduce((acc, cur) => +acc + +cur);

  let allTaxArr = data.map(item => item.Tax);
  let taxArr = allTaxArr.filter(item => item > 0); //remove items without tax

  let averageTax = allTaxArr.reduce((acc, cur) => +acc + +cur) / taxArr.length;

  let handleAdditionalTax = ev => {
    let value = ev.target.value;
    setAddTax(value);
    if (checkItemNumberField(value) && value > 0) {
      let totalSumValue = calculatePrice(1, sum, value);
      setTotalSum(totalSumValue);
    } else {
      setTotalSum(sum);
    }
  };

  //title fields
  const [sumTitle, setSumTitle] = useState("Sum");
  const [averageTaxTitle, setAverageTaxTitle] = useState("Average Tax");
  const [additionalTaxTitle, setAdditionalTaxTitle] = useState(
    "Additional Tax"
  );
  const [totalSumTitle, setTotalSumTitle] = useState("Total Sum");

  function handleTitle(e) {
    let value = e.target.value;
    let name = e.target.name;
    switch (name) {
      case "noTax":
        setSumTitle(value);
        break;
      case "tax":
        setAverageTaxTitle(value);
        break;
      case "addTax":
        setAdditionalTaxTitle(value);
        break;
      case "sumTotal":
        setTotalSumTitle(value);
        break;
      default:
    }
  }

  return (
    <div className="sum">
      <textarea
        name="noTax"
        id="noTax"
        cols="17"
        rows="1"
        defaultValue={sumTitle}
        onChange={handleTitle}
      ></textarea>
      <textarea
        name="noTaxValue"
        id="no-tax-value"
        cols="15"
        rows="1"
        value={sum}
        readOnly
      ></textarea>
      <br />
      <textarea
        name="tax"
        id="tax"
        cols="17"
        rows="1"
        defaultValue={averageTaxTitle}
        onChange={handleTitle}
      ></textarea>
      <textarea
        name="taxValue"
        id="tax-value"
        cols="15"
        rows="1"
        value={averageTax > 0 ? averageTax : "0"}
        readOnly
      ></textarea>
      <br />
      <textarea
        name="addTax"
        id="add-tax"
        cols="17"
        rows="1"
        defaultValue={additionalTaxTitle}
        onChange={handleTitle}
      ></textarea>
      <textarea
        name="addTaxValue"
        id="add-tax-value"
        cols="15"
        rows="1"
        value={addTax}
        onChange={handleAdditionalTax}
      ></textarea>
      <br />
      <textarea
        name="sumTotal"
        id="sum-total"
        cols="17"
        rows="1"
        defaultValue={totalSumTitle}
        onChange={handleTitle}
      ></textarea>
      <textarea
        name="sumValue"
        id="sum-value"
        cols="15"
        rows="1"
        value={totalSum}
        readOnly
      ></textarea>
    </div>
  );
};
export { Sum };
