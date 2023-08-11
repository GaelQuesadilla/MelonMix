import { useContext } from "react";
import { CardList } from "../components/cards/cardlist";
import { UseFetchMusic } from "../hooks/usefetchmusic";

export const Home = (props) => {
  const { MusicContext } = props;
  const {
    // eslint-disable-next-line no-unused-vars
    searchFilters,
    // eslint-disable-next-line no-unused-vars
    setSearchFilters,
    // eslint-disable-next-line no-unused-vars
    searchParams,
    setSearchParams,
    searchResults,
    hasMoreResultsRef,
  } = UseFetchMusic();
  const { music, setMusic } = useContext(MusicContext);
  return (
    <div id="page--Home">
      <CardList
        {...{
          searchResults,
          music,
          setMusic,
          setSearchParams,
          hasMoreResultsRef,
        }}
      />
    </div>
  );
};
