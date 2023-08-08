import { TogglePlayBtn } from "./toggleplaybtn.js";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/Row";
import { MusicData } from "./musicdata.js";
import { MusicRange } from "./musicrange.js";
import Container from "react-bootstrap/esm/Container";

export const PlayerBottom = (props) => {
  const { music, setMusic } = props;
  return (
    <div className=" position-fixed bottom-0 w-100">
      <Container className="player-bottom bg-dark text-light rounded w-100 mx-auto">
        <Row className="player-bottom__grid">
          <Col className="music-toggle-btn w-100">
            <TogglePlayBtn play={music.play} {...{ setMusic }} />
          </Col>
          <Col className="music-range">
            <MusicRange {...{ music, setMusic }} />
          </Col>
          <Col className="music-name">
            <MusicData {...{ music }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
