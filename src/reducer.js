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
    case "remove_post":
      return {
        ...state,
        hits: state.hits.filter((currStory) => {
          return currStory.objectID !== action.payload.storyID;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
