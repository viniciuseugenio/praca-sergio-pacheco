import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import { useEffect } from "react";
const Layout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
