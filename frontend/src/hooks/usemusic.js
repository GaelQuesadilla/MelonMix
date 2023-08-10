import { useEffect, useRef, useState } from "react";

export const UseMusic = (howlerRef) => {
  const [music, setMusic] = useState({
    url: null,
    play: false,
    time: 0,
    name: "",
    artist: "",
    duration: 0,
    id: -1,
  });
  const setIntervalRef = useRef();

  useEffect(() => {
    howlerRef.current.seek(music.time);

    return () => {};
  }, [music.time]);

  useEffect(() => {
    if (music.play === true) {
      setIntervalRef.current = setInterval(() => {
        setMusic((prev) => ({ ...prev, time: howlerRef.current.seek() }));
      }, 500);
    }

    return () => {
      clearInterval(setIntervalRef.current);
      setIntervalRef.current = undefined;
    };
  }, [music.play]);

  return {
    music,
    setMusic,
  };
};
