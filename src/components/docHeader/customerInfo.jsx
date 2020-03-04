import React from "react";
import { Info } from "./info";
import { BoxSet } from "./box-settings";

const CustomerInfo = () => {
  let data = ["Customer\n\nName\nAdress\nCity\nCountry\nTax number"];

  return (
    <div className="customer-info head-box">
      <BoxSet />
      <Info title={data} name="customer-info" />
    </div>
  );
};

export { CustomerInfo };
