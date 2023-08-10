import { useContext } from "react";
import { CardList } from "../components/cards/cardlist";
import { UseFetchMusic } from "../hooks/usefetchmusic";

export const Home = (props) => {
  const { MusicContext } = props;
  const { searchFilters, setSearchFilters, searchResults } = UseFetchMusic();
  const { music, setMusic } = useContext(MusicContext);
  return (
    <div id="page--Home">
      <CardList {...{ searchResults, music, setMusic }} />
    </div>
  );
};
