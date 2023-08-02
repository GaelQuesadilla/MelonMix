import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export const MusicData = (props) => {
  return (
    <Row>
      <Col>{props.music.name}</Col>
      <Col>{props.music.artist}</Col>
    </Row>
  );
};
