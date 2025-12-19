
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import TabsMobile from "./TabsMobile";

const Tabs = () => {
  const [categories, setCategories] = useState([]);

  async function getCategoryName() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    const categoryName = data.meals;
    setCategories(categoryName);
  }

  useEffect(() => {
    getCategoryName();
  }, []);

  return (
    <>
      <section className="sm:ml-70 py-20 sm:py-10">
        <h1 className="text-4xl font-bold bg-linear-to-br from-[#F29724] via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent">
          Learn, Cook, Eat Your Food
        </h1>
        {/* Desktop Tabs */}
        <div className=" hidden sm:flex flex-wrap gap-5 mt-7">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-lg rounded-4xl shadow px-2 py-1 border border-gray-400/50 transition-all
     ${
       isActive
         ? "bg-orange-500 text-white"
         : "bg-[#F4F2EE] text-gray-500 hover:bg-white hover:shadow-2xl hover:scale-105"
     }`
            }
          >
            All
          </NavLink>
          {categories.map((item, i) => (
            <NavLink
              key={i}
              to={`/category/${item.strCategory}`}
              className={({ isActive }) =>
                `text-lg rounded-4xl shadow px-2 py-1 border border-gray-400/50 transition-all
       ${
         isActive
           ? "bg-orange-500 text-white"
           : "bg-[#F4F2EE] text-gray-500 hover:bg-white hover:shadow-2xl hover:scale-105"
       }`
              }
            >
              {item.strCategory}
            </NavLink>
          ))}
        </div>
        {/* Mobile Tabs Select */}
        <TabsMobile categories={categories} />
      </section>
    </>
  );
};

export default Tabs;
