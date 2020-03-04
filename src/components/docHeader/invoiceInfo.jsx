import React from "react";
import { Info } from "./info";
import { BoxSet } from "./box-settings";

const InvoiceInfo = () => {
  let data = ["INVOICE\n\nID\nIssue Date\nDelivery Date\nDue Date"];
  return (
    <div className="invoice-info head-box">
      <BoxSet />
      <Info title={data} name="invoice-info" />
    </div>
  );
};
export { InvoiceInfo };
