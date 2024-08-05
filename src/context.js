//Context API

import React, { useContext } from "react";

// context creation
const AppContext = React.createContext();

//provider function
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Aman Goel"}>{children}</AppContext.Provider>
  );
};

//custom hook(returning hook in a custom hook)
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
