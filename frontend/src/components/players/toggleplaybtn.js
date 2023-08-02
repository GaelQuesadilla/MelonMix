import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { FaPlay as PlayIcon, FaPause as PauseIcon } from "react-icons/fa";
export const TogglePlayBtn = (props) => {
  return (
    <Container className="toggle-play-btn">
      <Button
        className="btn-success rounded-3 my-3 mx-auto toggle-play-btn__btn text-center fs-6"
        onClick={props.toggleMusicPlay}
        name="toggle play"
      >
        {props.play ? (
          <PauseIcon test-id="pause-icon" />
        ) : (
          <PlayIcon test-id="play-icon" />
        )}
      </Button>
    </Container>
  );
};
