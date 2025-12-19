import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState, useEffect } from "react";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  return (
    <aside>
      <div
        className="absolute top-7 left-3 text-3xl text-gray-400 sm:hidden z-50"
        role="button"
        aria-label="Open sidebar menu"
        onClick={() => setIsOpen((v) => !v)}
      >
        <HiMenuAlt2 className="cursor-pointer" />
      </div>
      <div
        className={`bg-white fixed top-0 left-0 min-h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } sm:translate-x-0 sm:w-64 shadow-sm z-50`}
      >
        <div>
          <img
            src={logo}
            alt="logo image"
            className="w-56 object-contain mx-auto mt-4"
          />
        </div>
        <ul className="mt-4 flex flex-col space-y-6 ">
          <li className="py-2 mx-3 rounded-2xl bg-orange-400 text-white shadow-lg shadow-orange-300 hover:transform hover:scale-105 hover:shadow-none transition-all">
            <NavLink
              to={"/"}
              className={`font-extrabold text-lg flex items-center gap-3 ml-3`}
            >
              <GiForkKnifeSpoon className="ml-3" />
              Meals
            </NavLink>
          </li>
          <li className="py-2 mx-3 rounded-2xl outline outline-gray-300 hover:transform hover:scale-105 transition-all">
            <NavLink
              to={"/"}
              className={`font-bold text-lg flex items-center gap-3 ml-3 `}
            >
              <GiForkKnifeSpoon className="ml-3" />
              Ingredients
            </NavLink>
          </li>
          <li className="py-2 mx-3 rounded-2xl outline outline-gray-300  hover:transform hover:scale-105 transition-all">
            <NavLink
              to={"/"}
              className={`font-bold text-lg flex items-center gap-3 ml-3 `}
            >
              <GiForkKnifeSpoon className="ml-3" />
              Area
            </NavLink>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 sm:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </aside>
  );
};

export default SideBar;
