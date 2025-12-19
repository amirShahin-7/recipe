
import SideBar from "../sideBar/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <main className="bg-[#F4F2EE]">
      <SideBar />
      <div className="px-5  min-h-screen selection:bg-orange-500 selection:text-white">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
