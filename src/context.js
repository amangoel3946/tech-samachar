//Context API

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let api = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: false,
  query: "HTML",
  nbPages: 0,
  page: 2,
  hits: [],
};

// context creation
const AppContext = React.createContext();

//provider function
const AppProvider = ({ children }) => {
  //useReducer() instead of useState()
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAPIData = async (url) => {
    dispatch({
      type: "set_loading",
    });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "get_stories",
        payload: {
          hits: data.hits,
        },
      });
      //   isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPIData(`${api}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//custom hook(returning hook in a custom hook)
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
