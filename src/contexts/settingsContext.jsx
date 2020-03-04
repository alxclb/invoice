import React, { createContext, useReducer } from "react";
import uuid from "uuid/v1";
import { settingsReducer } from "../components/invoiceReducers/settingsReducer";

export const SettingsContext = createContext();

export const SettingsProvider = props => {
  const [data, dispatch] = useReducer(settingsReducer, [
    {
      id: uuid(),
      className: "company-info",
      FontSize: "",
      FontColor: "",
      BackgroundColor: ""
    },
    {
      id: uuid(),
      className: "invoice-info",
      FontSize: "",
      FontColor: "",
      BackgroundColor: ""
    },
    {
      id: uuid(),
      className: "customer-info",
      FontSize: "",
      FontColor: "",
      BackgroundColor: ""
    }
  ]);

  return (
    <SettingsContext.Provider value={{ data, dispatch }}>
      {props.children}
    </SettingsContext.Provider>
  );
};
