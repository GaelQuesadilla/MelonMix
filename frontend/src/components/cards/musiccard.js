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
        className="music-card mx-3 flex-1 flex-grow-1 my-2 rounded-0 flex-1"
        onClick={() => handleClick(music)}
      >
        <Card.Img
          className={`music-card__image rounded-0 ${
            imageLoaded ? "" : "d-none"
          }`}
          src={process.env.PUBLIC_URL + "/images/music-note.png"}
          alt="music-note"
          onLoad={() => setImageLoaded(true)}
        />
        {imageLoaded ? null : (
          <Container className="music-card__loading-image rounded-0 mx-auto d-flex align-items-center justify-content-center">
            <Container>
              <Spinner variant="primary" className="me-3" />
            </Container>
            <p className="text fs-4">Loading...</p>
          </Container>
        )}

        <Card.Title className="music-card__title w-100 text-center m-0 rounded-0 border-0">
          {music.name}
        </Card.Title>
        <Card.Text className="music-card__text">{music.artist}</Card.Text>
      </Card>
    </>
  );
});
