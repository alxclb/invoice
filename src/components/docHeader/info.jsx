import React, { useContext } from "react";
import { useState } from "react";
import { SettingsContext } from "../../contexts/settingsContext";

const Info = props => {
  let { name } = props;
  let { title } = props;

  const { data } = useContext(SettingsContext);
  const [value, setValue] = useState(title);

  const changeStyle = () => {
    let element = data.filter(el => el.className === name);
    let style = {};
    style.fontSize = `${element[0].FontSize}pt`;
    style.color = element[0].FontColor;
    style.backgroundColor = element[0].BackgroundColor;
    return style;
  };

  function handleChange(e) {
    let x = e.target.value;
    setValue(x);
  }

  function handleToggle(e) {
    let x = e.target.parentElement.previousElementSibling.style.display;
    if (x === "none") {
      e.target.parentElement.previousElementSibling.setAttribute(
        "style",
        "display : inline;"
      );
    } else {
      e.target.parentElement.previousElementSibling.setAttribute(
        "style",
        "display : none;"
      );
    }
  }

  return (
    <div>
      <textarea
        name={name}
        id={name}
        style={changeStyle()}
        cols="49"
        rows="8"
        defaultValue={value}
        onChange={handleChange}
        onMouseOver={handleToggle}
      />
    </div>
  );
};

export { Info };
