import { useState } from "react";

export const UseMusic = () => {
  const [music, setMusic] = useState({
    url: null,
    play: false,
    time: 0,
    name: "",
    artist: "",
    totalTime: 0,
  });

  const toggleMusicPlay = () => {
    setMusic((prev) => ({ ...prev, play: !prev.play }));
  };
  const setMusicPlay = (value) => {
    setMusic((prev) => ({ ...prev, play: value }));
  };

  const setMusicTime = (value) => {
    setMusic((prev) => ({ ...prev, time: value }));
  };

  return { music, setMusic, toggleMusicPlay, setMusicPlay, setMusicTime };
};
