import React from "react";
import { Info } from "./info";
import { BoxSet } from "./box-settings";

const CompanyInfo = () => {
  let data = ["Issued by\n\nName\nAdress\nCity\nCountry\nTax number"];

  return (
    <div className="company-info head-box">
      <BoxSet />
      <Info title={data} name="company-info" />
    </div>
  );
};

export { CompanyInfo };
