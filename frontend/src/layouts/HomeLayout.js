import { useRef } from "react";
import { NavigationBar } from "../components/navbar/navbar";
import { PlayerBottom } from "../components/players/playerbottom";
import { UseMusic } from "../hooks/usemusic";
import ReactHowler from "react-howler";

export const HomeLayout = (props) => {
  const howlerRef = useRef();
  const { music, setMusic } = UseMusic(howlerRef);

  return (
    <div id="app__home-layout">
      <NavigationBar />
      <>{props.children}</>
      <PlayerBottom {...{ music, setMusic }} />
      <ReactHowler
        src={process.env.REACT_APP_BACKEND_URL + music.url}
        playing={music.play}
        ref={howlerRef}
        onLoad={() =>
          setMusic((prev) => ({
            ...prev,
            duration: howlerRef.current.duration(),
          }))
        }
        onLoadError={() =>
          console.error(
            `Error: Cant found audio file at ${howlerRef.current.props.src}`
          )
        }
      />
    </div>
  );
};
