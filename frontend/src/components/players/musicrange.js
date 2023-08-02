import Form from "react-bootstrap/Form";
export const MusicRange = (props) => {
  return (
    <>
      <Form.Label className="d-none">Range</Form.Label>
      <Form.Range
        min={0}
        value={props.music.time}
        max={props.music.totalTime}
        onChange={(event) => props.setMusicTime(event.target.value)}
        className="mx-auto my-3"
        name="music progress"
        data-testid="playerSliderInput"
        role="slider"
      ></Form.Range>
    </>
  );
};
