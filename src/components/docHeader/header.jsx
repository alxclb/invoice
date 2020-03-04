import React from "react";
import { Logo } from "./logo";
import { CompanyInfo } from "./companyInfo";
import { InvoiceInfo } from "./invoiceInfo";
import { CustomerInfo } from "./customerInfo";

const DocHeader = () => {
  return (
    <div className="header">
      <Logo />
      <CompanyInfo />
      <InvoiceInfo />
      <CustomerInfo />
    </div>
  );
};

export { DocHeader };
