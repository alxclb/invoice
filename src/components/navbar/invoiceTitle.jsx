import React from "react";

const InvoiceTitle = () => {
  let style = {
    margin: "5px",
    padding: "10px",
    paddingTop: "20px",
    marginLeft: "140px",
    fontFamily: "Fontania",
    fontSize: "40px"
  };
  return (
    <div style={{ margin: "0px" }}>
      <p style={style}>Invoice</p>
      {/* <h2>simple app</h2> */}
    </div>
  );
};
export { InvoiceTitle };
