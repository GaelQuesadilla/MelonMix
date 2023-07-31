import { NavigationBar } from "../components/navbar/NavBar";

export const HomeLayout = (props) => {
  return (
    <div id="app__home-layout">
      <NavigationBar />
      <>{props.children}</>
    </div>
  );
};
