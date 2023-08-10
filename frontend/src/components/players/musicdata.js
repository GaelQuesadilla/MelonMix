import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export const MusicData = (props) => {
  const { music } = props;
  return (
    <Row>
      <Col>{music.name}</Col>
      <Col>{music.artist}</Col>
    </Row>
  );
};
