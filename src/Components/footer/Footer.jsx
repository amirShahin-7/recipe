import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-2xl text-black shadow-2xl  relative bottom-0 left-0 w-full z-60">
      <div className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Meals logo"
            className="h-16 w-16 object-contain"
          />
          <Link
            to={"/"}
            className="tracking-wide font-extrabold text-2xl hover:text-orange-400 transition"
          >
            Recipe
          </Link>
        </div>

        <nav className="flex gap-4 flex-wrap">
          <Link to={"/"} className="hover:text-orange-400 transition">
            Meals
          </Link>
          <Link to={"/"} className="hover:text-orange-400 transition">
            Categories
          </Link>
          <Link to={"/"} className="hover:text-orange-400 transition">
            Contact
          </Link>
        </nav>
      </div>
      <div className="text-sm opacity-60 font-bold text-center py-7 border-t max-w-7xl mx-auto border-gray-300">
        © 2025 Recipe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
