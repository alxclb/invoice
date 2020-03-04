import uuid from "uuid/v1";

export let updateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: uuid(),
          Description: " ",
          Quantity: 0,
          Tax: 0,
          Price: 0,
          Total: 0.0
        }
      ];
    case "ADD_DESC":
      state[action.index] = {
        ...state[action.index],
        Description: action.value
      };
      return [...state];
    case "ADD_QTY":
      state[action.index] = {
        ...state[action.index],
        Quantity: action.value,
        Total: action.totalValue
      };
      return [...state];
    case "ADD_TAX":
      state[action.index] = {
        ...state[action.index],
        Tax: action.value,
        Total: action.totalValue
      };
      return [...state];
    case "ADD_PRICE":
      state[action.index] = {
        ...state[action.index],
        Price: action.fValue,
        Total: action.totalValue
      };
      return [...state];
    case "REMOVE_ITEM":
      if (state.length > 1) {
        state = state.filter((_, index) => index !== action.index);
      }
      return state;

    default:
      throw new Error();
  }
};
