import { forwardRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

export const MusicCard = forwardRef((props, ref) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { music, handleClick } = props;

  return (
    <>
      <Card
        ref={ref}
        className="music-card mx-3 my-3 flex-1 flex-grow-1 flex-1 rounded shadow"
        onClick={() => handleClick(music)}
      >
        <Card.Img
          className={`music-card__image ${imageLoaded ? "" : "d-none"}`}
          src={process.env.REACT_APP_BACKEND_URL + "/images/music-note.png"}
          alt="music-note"
          variant="top"
          onLoad={() => setImageLoaded(true)}
        />
        {imageLoaded ? null : (
          <Container className="music-card__loading-image rounded-0 mx-auto d-flex align-items-center justify-content-center">
            <Container className="d-flex align-items-center justify-content-center">
              <Spinner variant="primary" className="me-3" />
              <p className="text fs-4">Loading...</p>
            </Container>
          </Container>
        )}

        <Card.Title className="music-card__title w-100 text-center m-0 mt-2 rounded-0 border-0">
          {music.name}
        </Card.Title>
        <Card.Text className="music-card__text text-center mb-2">
          {music.artist}
        </Card.Text>
      </Card>
    </>
  );
});
