import { useEffect, useRef, useState } from "react";

export const UseFetchMusic = () => {
  const [searchFilters, setSearchFilters] = useState({
    author: "",
    title: "",
  });
  const [searchParams, setSearchParams] = useState({
    initial_index: "0",
    max_results: "10",
  });
  const [searchResults, setSearchResults] = useState([]);
  const currentIds = useRef([]);

  const hasMoreResultsRef = useRef(false);

  const getByFetch = (func) => {
    const params = new URLSearchParams(
      Object.assign({}, searchFilters, searchParams)
    ).toString();

    fetch(process.env.REACT_APP_BACKEND_URL + "/media/get/?" + params, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length === 0) {
          hasMoreResultsRef.current = false;
        } else {
          hasMoreResultsRef.current = true;
        }
        func(data);
      });
  };

  useEffect(() => {
    getByFetch((data) => {
      console.debug("Search filters arent equal, creating new list of results");
      setSearchResults(data.results);
      currentIds.current = data.results.map((el) => el.id);
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFilters]);

  useEffect(() => {
    getByFetch((data) => {
      console.debug("Search filters are equal, adding to current results");

      // Only last elements will be checked to prevent duplication
      let lastElements = data.results.slice(-Number(data.search.max_results));
      let filteredResults = lastElements.filter((el) => {
        const isDuplicated = currentIds.current.includes(el.id);
        if (!isDuplicated) {
          // Updating ids that have been saved
          currentIds.current = [...currentIds.current, el.id];
        }
        return !isDuplicated;
      });

      // Adding new elements
      setSearchResults((prev) => [...prev, ...filteredResults]);
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return {
    searchFilters,
    setSearchFilters,
    searchParams,
    setSearchParams,
    searchResults,
    hasMoreResultsRef,
  };
};
