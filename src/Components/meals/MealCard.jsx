
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  return (
    <Link
      to={`/mealDetails/${meal.idMeal}`}
      className="bg-white/80 rounded-4xl shadow-md my-10 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-46  block mx-auto rounded-full overflow-hidden -translate-y-1/4 group-hover:rotate-[360deg] transition duration-700"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{meal.strMeal}</h3>
        {meal.strCategory && (
          <h4 className="font-bold text-lg text-green-600 mb-2 flex items-center justify-center gap-2">
            <GoGlobe />
            {meal.strCategory}
          </h4>
        )}
        <button className="text-white font-bold cursor-pointer bg-green-500 text-sm p-3 rounded-2xl hover:bg-white hover:text-green-500 hover:outline hover:outline-green-500">
          recipe details
        </button>
      </div>
    </Link>
  );
};

export default MealCard;
