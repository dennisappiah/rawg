import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

// All pages should have a NavBar at the top

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
