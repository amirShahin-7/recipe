
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { PiBackspaceLight } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../loading/Loading";

const MealDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getMealDetails() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (data.meals === "Invalid ID") {
        navigate("/notFound");
        return;
      }

      if (data.meals && data.meals[0]) {
        setMealDetails(data.meals[0]);
      } else {
        navigate("/notFound");
      }
    } catch (err) {
      console.error(err);
      navigate("/notFound");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMealDetails();
  }, [id]);

  const handleYoutube = () => {
    if (mealDetails?.strYoutube) {
      window.open(mealDetails.strYoutube);
    }
  };

  const handleSource = () => {
    if (mealDetails?.strSource) {
      window.open(mealDetails.strSource);
    }
  };

  const ingredients =
    mealDetails &&
    Array.from({ length: 20 }, (_, i) => {
      const index = i + 1;
      const ingredient = mealDetails[`strIngredient${index}`];
      const measure = mealDetails[`strMeasure${index}`];

      if (!ingredient || ingredient.trim() === "") return null;
      return {
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      };
    }).filter(Boolean);

  return (
    <>
      {isLoading ? (
        <div className="sm:ml-70 py-10 px-4">
          <Loading />
        </div>
      ) : (
        mealDetails && (
          <section className="sm:ml-70 py-10 px-4">
            <div className="flex justify-between items-center flex-wrap gap-4  mt-8 ">
              <h2 className="font-Pacifico font-bold text-5xl hover:text-orange-500sm:mt-0 text-shadow-lg">
                {mealDetails.strMeal}
              </h2>
              <button
                onClick={() => navigate(`/category/${mealDetails.strCategory}`)}
                className="outline-1 outline-orange-500 text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-3 py-2 rounded-2xl mr-5 flex items-center transition-all duration-300"
              >
                <PiBackspaceLight className="mr-2" />
                Back
              </button>
            </div>

            <div className="flex flex-wrap mt-6">
              <div className="img mt-6 flex flex-col w-full lg:w-1/2 xl:w-1/3 px-4">
                <img
                  src={mealDetails.strMealThumb}
                  alt={mealDetails.strMeal}
                  className="w-125 h-auto object-cover rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition"
                />
                <div className="flex flex-wrap xl:justify-center gap-4 my-6">
                  {mealDetails.strYoutube && (
                    <button
                      onClick={handleYoutube}
                      className="cursor-pointer py-2 px-3 bg-red-500 text-white rounded-4xl hover:outline-2 hover:outline-orange-500 hover:bg-transparent hover:text-orange-500 flex items-center transition-all duration-300"
                    >
                      <FaYoutube className="mr-2" />
                      Youtube
                    </button>
                  )}
                  {mealDetails.strSource && (
                    <button
                      onClick={handleSource}
                      className="cursor-pointer py-2 px-3 bg-green-600 text-white rounded-4xl hover:outline-2 hover:outline-orange-500 hover:bg-transparent hover:text-orange-500 flex items-center transition-all duration-300"
                    >
                      <CiGlobe className="mr-2" />
                      Source
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-6 w-full lg:w-1/2 xl:w-1/3 px-4 font-serif">
                <p className="text-shadow-md text-gray-700 leading-relaxed whitespace-pre-line">
                  {mealDetails.strInstructions}
                </p>
              </div>

              <div className="mt-6 w-full xl:w-1/3 px-4">
                <div className="overflow-x-auto shadow-lg rounded-lg">
                  <table className="w-full border-collapse font-sans">
                    <thead>
                      <tr className="bg-orange-500 text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                          Ingredient
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                          Measure
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.length > 0 &&
                        ingredients.map((row, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-orange-100 transition-colors duration-200`}
                          >
                            <td className="border border-gray-300 px-4 py-3 text-gray-800">
                              {row.ingredient}
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-600">
                              {row.measure}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
                    Category: {mealDetails.strCategory}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                    Area: {mealDetails.strArea}
                  </span>
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default MealDetails;
