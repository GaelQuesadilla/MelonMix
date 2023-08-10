import Card from "react-bootstrap/Card";

export const MusicCard = (props) => {
  const { music, handleClick } = props;
  return (
    <>
      <Card
        className="music-card mx-3 flex-1 flex-grow-1 my-2 rounded-0 flex-1"
        onClick={() => handleClick(music)}
      >
        <Card.Img
          className="music-card__image rounded-0"
          src={process.env.PUBLIC_URL + "/images/music-note.png"}
          alt="music-note"
        />
        <Card.Title className="music-card__title w-100 text-center m-0 rounded-0 border-0">
          {music.name}
        </Card.Title>
        <Card.Text className="music-card__text">{music.artist}</Card.Text>
      </Card>
    </>
  );
};
