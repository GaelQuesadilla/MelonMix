import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import * as ROUTES from "./constants/routes.js";
import { HomeLayout } from "./layouts/HomeLayout";
import "./styles/index.scss";
import { createContext } from "react";

const MusicContext = createContext(null);
export const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <HomeLayout {...{ MusicContext }}>
              <Home {...{ MusicContext }} />
            </HomeLayout>
          }
        />
      </Routes>
    </div>
  );
};
