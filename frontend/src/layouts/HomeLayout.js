import { useState } from "react";
import { NavigationBar } from "../components/navbar/navbar";
import { PlayerBottom } from "../components/players/playerbottom";
import { UseMusic } from "../hooks/usemusic";

export const HomeLayout = (props) => {
  const { music, setMusic, toggleMusicPlay, setMusicTime } = UseMusic();
  return (
    <div id="app__home-layout">
      <NavigationBar />
      <>{props.children}</>
      <PlayerBottom {...{ music, setMusic, toggleMusicPlay, setMusicTime }} />
    </div>
  );
};
