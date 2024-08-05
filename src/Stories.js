import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, nbPages, page, isLoading } = useGlobalContext();

  // let loading = isLoading;

  if (isLoading) {
    return (
      <>
        <h2>Loading...{isLoading}</h2>;
      </>
    );
  }
  return (
    <>
      <h2>New tech Stories</h2>
      {hits.map((curr, i) => {
        return <div key={i}>{curr.author}</div>;
      })}
      {nbPages}
      {page}
    </>
  );
};

export default Stories;
