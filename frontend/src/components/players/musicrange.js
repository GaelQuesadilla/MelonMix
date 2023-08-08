import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
export const MusicRange = (props) => {
  const { music, setMusic } = props;
  const rangeRef = useRef();
  const [sliderValue, setSliderValue] = useState(music.time);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleSliderChange = () => {
    setIsInteracting(false); // El usuario ha terminado de desplazar el slider
    setMusic((prev) => ({ ...prev, time: sliderValue }));
  };
  useEffect(() => {
    if (!isInteracting) {
      setSliderValue(music.time);
    }
  }, [music.time, isInteracting]);
  return (
    <>
      <Form.Label className="d-none">Range</Form.Label>
      <Form.Range
        min={0}
        step={0.5}
        value={sliderValue}
        max={music.duration}
        ref={rangeRef}
        onChange={(event) => {
          setSliderValue(event.target.value);
          setIsInteracting(true);
        }}
        onMouseUp={handleSliderChange}
        onTouchEnd={handleSliderChange}
        className="mx-auto my-3"
        name="music progress"
        data-testid="playerSliderInput"
        role="slider"
      ></Form.Range>
    </>
  );
};
