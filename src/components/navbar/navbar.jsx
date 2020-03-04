import React from "react";
import ReactToPrint from "react-to-print";
import { InfoBtn } from "./info-button";

const Navbar = ({ componentRef }) => {
  return (
    <nav>
      <ReactToPrint
        trigger={() => (
          <button className="print-btn" type="submit">
            Print
          </button>
        )}
        content={() => componentRef.current}
        copyStyles={true}
      />
      <InfoBtn />
    </nav>
  );
};

export { Navbar };
