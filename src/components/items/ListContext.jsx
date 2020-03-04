import React, { createContext, useReducer } from "react";
import { updateReducer } from "../invoiceReducers/updateReducer";
import uuid from "uuid/v1";

export const ListContext = createContext();

export const ListProvider = props => {
  const [data, dispatch] = useReducer(updateReducer, [
    {
      id: uuid(),
      Description: "",
      Quantity: 0,
      Tax: 0,
      Price: 0,
      Total: 0.0
    }
  ]);

  return (
    <ListContext.Provider value={{ data, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
};
