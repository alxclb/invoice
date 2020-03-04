export let settingsReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FONT_SIZE":
      state[action.index] = {
        ...state[action.index],
        FontSize: action.value
      };
      return [...state];
    case "CHANGE_FONT_COLOR":
      state[action.index] = {
        ...state[action.index],
        FontColor: action.value
      };
      return [...state];
    case "CHANGE_BACKGROUND_COLOR":
      state[action.index] = {
        ...state[action.index],
        BackgroundColor: action.value
      };
      return [...state];

    default:
      throw new Error();
  }
};
