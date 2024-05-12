import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="font-montserrat text-black dark:text-white">
      <Navbar />
      <div className="w-[93%] md:w-[95%] max-w-7xl mx-auto min-h-[calc(100vh-348px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
