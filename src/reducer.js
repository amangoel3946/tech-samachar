// import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_stories":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
      };
    case "set_loading":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
