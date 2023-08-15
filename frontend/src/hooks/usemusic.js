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
    cover_url: "",
  });
  const setIntervalRef = useRef();

  useEffect(() => {
    howlerRef.current.seek(music.time);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [music.play]);

  return {
    music,
    setMusic,
  };
};
