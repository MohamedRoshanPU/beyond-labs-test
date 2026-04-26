import { Outlet } from "react-router";
import NavBar from "./components/nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
