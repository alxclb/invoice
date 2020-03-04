import React, { useContext } from "react";
import { SettingsContext } from "../../contexts/settingsContext";
import { useState } from "react";
import { isColor, checkItemNumberField } from "../utilities/val";

const BoxSet = () => {
  const { data, dispatch } = useContext(SettingsContext);

  const [sizeDisplay, setSizeDisplay] = useState("none");
  const [colorDisplay, setColorDisplay] = useState("none");
  const [backgroundDisplay, setBackgroundDisplay] = useState("none");

  function handleToggle(e) {
    e.target.display = "inline";
  }
  function handleDisplay(e) {
    switch (e.target.nextElementSibling.name) {
      case "font-size":
        sizeDisplay === "none"
          ? setSizeDisplay("block")
          : setSizeDisplay("none");
        break;
      case "font-color":
        colorDisplay === "none"
          ? setColorDisplay("block")
          : setColorDisplay("none");
        break;
      case "background":
        backgroundDisplay === "none"
          ? setBackgroundDisplay("block")
          : setBackgroundDisplay("none");
        break;
      default:
        console.log("error");
        break;
    }
  }
  function handleChange(e) {
    let x = e.target.parentElement.parentElement.parentElement.className;
    let name = x.split(" ");
    name = name[0];
    let id;
    let index;
    switch (name) {
      case "company-info":
        id = data[0].id;
        index = 0;
        break;
      case "invoice-info":
        id = data[1].id;
        index = 1;
        break;
      case "customer-info":
        id = data[2].id;
        index = 2;
        break;
      default:
        console.log("error");
        break;
    }
    let value = e.target.value;

    switch (e.target.name) {
      case "font-size":
        if (checkItemNumberField(value)) {
          dispatch({ type: "CHANGE_FONT_SIZE", index, id, value });
        }
        break;
      case "font-color":
        if (isColor(value)) {
          dispatch({ type: "CHANGE_FONT_COLOR", index, id, value });
        }
        break;
      case "background":
        if (isColor(value)) {
          dispatch({ type: "CHANGE_BACKGROUND_COLOR", index, id, value });
        }
        break;
      default:
        console.log("error");
        break;
    }
  }

  return (
    <div
      className="settings"
      style={{ display: "none" }}
      onMouseOver={handleToggle}
    >
      <div>
        <button onClick={handleDisplay}>Font size</button>
        <input
          name="font-size"
          type="text"
          style={{ display: sizeDisplay }}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleDisplay}>Font color</button>
        <input
          name="font-color"
          type="text"
          style={{ display: colorDisplay }}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleDisplay}>Background color</button>
        <input
          name="background"
          type="text"
          style={{ display: backgroundDisplay }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export { BoxSet };
