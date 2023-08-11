import Container from "react-bootstrap/Container";
import { MusicCard } from "./musiccard.js";
import { UseInfiniteScroll } from "../../hooks/useinfinitescroll.js";
import { useRef } from "react";

export const CardList = (props) => {
  const { searchResults, music, setMusic, setSearchParams, hasMoreResultsRef } =
    props;
  const lastElementRef = useRef(null);
  UseInfiniteScroll({
    searchResults,
    setSearchParams,
    hasMoreResultsRef,
    lastElementRef,
  });

  const handleClick = (data) => {
    if (data.id !== music.id) {
      setMusic({
        url: data.url,
        play: true,
        time: 0,
        name: data.name,
        artist: data.artist,
        duration: 0,
        id: data.id,
      });
    }
  };
  return (
    <>
      <h2 className="w-100 ps-3 my-2">Listen music</h2>
      <Container
        data-testid="card-list"
        className="d-flex flex-wrap m-0 mx-auto p-0 justify-content-center"
      >
        {searchResults.length > 0 ? (
          searchResults.map((el, index) => {
            if (searchResults.length === index + 1) {
              return (
                <MusicCard
                  ref={lastElementRef}
                  music={el}
                  key={index}
                  {...{ handleClick }}
                />
              );
            }

            return <MusicCard music={el} key={index} {...{ handleClick }} />;
          })
        ) : (
          <p>Nothing found :c</p>
        )}
      </Container>
    </>
  );
};
