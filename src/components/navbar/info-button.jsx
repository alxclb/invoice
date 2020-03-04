import React, { Fragment } from "react";
import { useState } from "react";

const InfoBtn = () => {
  const [display, setDisplay] = useState("none");

  function handleInfo(e) {
    let x = e.target.nextElementSibling.style.display;
    x === "none" ? setDisplay("block") : setDisplay("none");
  }
  let style = {
    display: display,
    position: "absolute",
    width: "300px",
    backgroundColor: "white",
    color: "black",
    zIndex: "+1",
    fontSize: "11pt",
    marginLeft: "50%",
    marginTop: "5px",
    padding: "5px 0 5px 0",
    border: "dashed 1px rgb(13, 66, 228)",
    borderRadius: "3px",
    transition: "0.4s"
  };
  return (
    <Fragment>
      <button name="info" className="print-btn" onClick={handleInfo}>
        Info
      </button>
      <label htmlFor="info" style={style}>
        Version 1.0.0. <br /> <br />
        Simple Invoice application in React.js <br />
        -supported browsers: Chrome, Firefox, Opera <br />
        -all fields are changeable <br />
        -after reload a page, all data will be lost <br />
        -font size is in pt <br />
        <br />
        Suggestions : suggestions404@gmail.com <br />
      </label>
    </Fragment>
  );
};
export { InfoBtn };
