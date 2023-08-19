import { forwardRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { LazyImage } from "../global/lazyimage";

export const MusicCard = forwardRef((props, ref) => {
  const { music, handleClick } = props;

  return (
    <>
      <Card
        ref={ref}
        className="music-card mx-3 my-3 flex-1 flex-grow-1 flex-1 rounded shadow"
        onClick={() => handleClick(music)}
      >
        <Card.Img
          className="music-card__image"
          as={LazyImage}
          src={process.env.REACT_APP_BACKEND_URL + music.cover_url}
          lazy_src={process.env.REACT_APP_BACKEND_URL + music.lazy_cover_url}
          alt="music-note"
          variant="top"
        />

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
