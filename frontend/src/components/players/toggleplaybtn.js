import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { FaPlay as PlayIcon, FaPause as PauseIcon } from "react-icons/fa";
export const TogglePlayBtn = (props) => {
  const { play, setMusic } = props;
  return (
    <Container className="toggle-play-btn">
      <Button
        className="btn-success rounded-3 my-3 mx-auto toggle-play-btn__btn text-center fs-6"
        onClick={() =>
          setMusic((prev) => ({
            ...prev,
            play: !prev.play,
          }))
        }
        name="toggle play"
        data-testid="playerTogglePlayBtn"
        role="button"
      >
        {play ? (
          <PauseIcon data-testid="player-pause-icon" />
        ) : (
          <PlayIcon data-testid="player-play-icon" />
        )}
      </Button>
    </Container>
  );
};
