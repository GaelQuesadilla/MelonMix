import { useEffect } from "react";

export const UseInfiniteScroll = (props) => {
  const { searchResults, setSearchParams, hasMoreResultsRef, lastElementRef } =
    props;

  const fetchMoreItems = () => {
    setSearchParams((prev) => ({
      ...prev,
      initial_index: String(
        Number(prev.initial_index) + Number(prev.max_results)
      ),
    }));
  };

  const onIntersection = (entries) => {
    const firsEntry = entries[0];
    if (firsEntry.isIntersecting && hasMoreResultsRef.current) {
      fetchMoreItems();
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);
};
