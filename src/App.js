import React from "react";
// import Search from "./Search";
import Search from "./search.js";
import Pagination from "./Pagination";
import Stories from "./Stories";
// import { useContext } from "react";
// import { AppContext } from "./context";

const App = () => {
  // const data = useGlobalContext();

  return (
    <div>
      App 
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
