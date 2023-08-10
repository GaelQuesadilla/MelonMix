import Container from "react-bootstrap/Container";
import { MusicCard } from "./musiccard.js";
export const CardList = (props) => {
  const { searchResults, music, setMusic } = props;

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
          searchResults.map((el, index) => (
            <MusicCard music={el} key={index} {...{ handleClick }} />
          ))
        ) : (
          <p>Nothing found :c</p>
        )}
      </Container>
    </>
  );
};
