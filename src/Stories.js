import React, { useEffect } from "react";

const Stories = () => {
  let isLoading = true;
  let api = "http://hn.algolia.com/api/v1/search?query=html";

  const fetchAPIData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPIData(api);
  }, []);

  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>;
      </>
    );
  } else {
    return (
      <>
        <h2>My new StoriesPage</h2>
      </>
    );
  }
};

export default Stories;
