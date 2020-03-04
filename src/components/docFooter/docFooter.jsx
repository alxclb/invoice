import React from "react";
import { useState } from "react";

const DocFooter = () => {
  let paymentDetails = "Payment Details\n\n";
  let termsAndConditions = "Terms & Conditions\n\n";

  const [pay, setPay]=useState(paymentDetails)
  const [terms, setTerms]=useState(termsAndConditions)

  function handleChangePay(e){
    let x=e.target.value;
    setPay(x)
  }
  function handleChangeTerms(e){
    let x=e.target.value;
    setTerms(x)
  }

  return (
    <div className="doc-footer">
      <textarea
        name="Payment"
        className="text-payment"
        cols="40"
        rows="5"
        defaultValue={pay}
        onChange={handleChangePay}
      ></textarea>
      <textarea
        name="Terms"
        className="text-terms"
        cols="99"
        rows="5"
        defaultValue={terms}
        onChange={handleChangeTerms}
      ></textarea>
    </div>
  );
};

export { DocFooter };
